import java.lang.reflect.Constructor;

public class MyConstructor {
  public static void main(String[] args) throws Exception{

    /**
     * 通过反射来创建新的实例，可以通过 class 提供的 newInstance()
     * 
     * 局限
     * 只能调用该类的 public 无参数的构造方法。
     */
    Person p1 = Person.class.newInstance();
    // Person p2 = Person.class.newInstance("nihao"); // error

    
    /**
     * 为了任意调用构造方法，Java 的反射 API 提供了 Constructor 对象，包含素有构造方法的所有信息
     */
    Constructor cons1 = Integer.class.getConstructor(int.class);

    Integer n1 = (Integer) cons1.newInstance(123);
    
    System.out.println(n1);


    // 获取构造函数 Integer(String)
    Constructor cons2 = Integer.class.getConstructor(String.class);
    Integer n2 = (Integer) cons2.newInstance("456");
    System.out.println(n2);
  }
}

class Person {
  public String name = "nihao";

  public Person(String name) {
    this.name = name;
  }
}