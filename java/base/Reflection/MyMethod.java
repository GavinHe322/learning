import java.lang.Class;
import java.lang.reflect.Method;

// public class MyMethod {
//   public static void main(String[] args) throws Exception {
//     Class stdClass = Student.class;
//       // 获取public方法getScore，参数为String:
//       System.out.println(stdClass.getMethod("getScore", String.class));
//       // 获取继承的public方法getName，无参数:
//       System.out.println(stdClass.getMethod("getName"));
//       // 获取private方法getGrade，参数为int:
//       System.out.println(stdClass.getDeclaredMethod("getGrade", int.class));
    
//   }  
// }

// class Student extends Person {
//   public int getScore(String type) {
//     return 99;
//   }
//   private int getGrade(int year) {
//     return 2020;
//   }
// }

// class Person {
//   public String getName() {
//     return "Person";
//   }
// }

// ------------------------------------------------

public class MyMethod {
  public static void main(String[] args) throws Exception {
      // String对象:
      String s = "Hello world";
      // 获取String substring(int)方法，参数为int:
      Method m = String.class.getMethod("substring", int.class);
      // 在s对象上调用该方法并获取结果:
      String r = (String) m.invoke(s, 6);
      // 打印调用结果:
      System.out.println(r);
  }
}
