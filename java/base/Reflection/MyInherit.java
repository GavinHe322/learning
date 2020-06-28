import java.lang.Class;

public class MyInherit {
  public static void main(String[] args) throws Exception {

    // 1
    String s0 = "";
    Class cls0 = s0.getClass();
    System.out.println(cls0);

    // 2
    Class s = Class.forName("java.lang.String");
    System.out.println(s);

    // 3
    Class i = Integer.class;
    Class n  = i.getSuperclass();
    System.out.println(n);
    Class o  = n.getSuperclass();
    System.out.println(o);
    System.out.println(o.getSuperclass());

    // 继承关系
    Object n1 = Integer.valueOf(1234);
    boolean isDouble = n1 instanceof Double; // false
    boolean isInteger = n1 instanceof Integer; // true
    boolean isNumber = n1 instanceof Number; // true
    boolean isSerializable = n1 instanceof java.io.Serializable; // true
    System.out.println(isDouble);
    System.out.println(isInteger);
    System.out.println(isNumber);
    System.out.println(isSerializable);
  }  
}