import java.lang.Class;
import java.lang.reflect.Field;

public class MyClass {
  public static void main(String[] args) throws Exception {
      Class stdClass = Student.class;
      // 获取public字段"score":
      System.out.println(stdClass.getField("score"));
      // 获取继承的public字段"name":
      System.out.println(stdClass.getField("name"));
      // 获取private字段"grade":
      System.out.println(stdClass.getDeclaredField("grade"));

      int a = 2;
      double b = 5.0;
      a = (int) b;
      System.out.println(a + "---" + b);

      Person p = new Person("xiao ming");
      System.out.println(p.getName());
      
      Class c = p.getClass();
      Field f = c.getDeclaredField("name");
      f.setAccessible(true);
      f.set(p, "xiao hong");
      System.out.println(p.getName());
  }
}

class Student extends Person {
  public int score;
  private int grade;

  public Student(String name) {
    super(name);
  }
}

class Person {
  public String name;

  public Person(String name) {
    this.name = name;
  }

  public String getName() {
    return this.name;
  }
}
