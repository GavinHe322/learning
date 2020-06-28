/**
 * class 和 interface 的区别
 * 
 * 可以实例化 class，(非 abstract)
 * 不能实例化 interface
 */
// 静态代码
// public class MyProxy {
//   public static void main(String[] args) throws Exception{
//     Hello hello = new HelloWorld();
//     hello.morning("Bod");
//   }
// }

// interface Hello {
//   void morning(String name);
// }

// class HelloWorld implements Hello {
//   public void morning(String name) {
//     System.out.println("good morning, " + name);
//   }
// }


// 动态创建------------------------------------------------------------------------
import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.lang.reflect.Proxy;


public class MyProxy {
  public static void main(String[] args) {
    InvocationHandler handler = new InvocationHandler(){
    
      @Override
      public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
        System.out.println(method);
        if (method.getName().equals("morning")) {
          System.out.println("good morning, " + args[0]);
        }
        return null;
      }
    };
    Hello hello = (Hello) Proxy.newProxyInstance(Hello.class.getClassLoader(), new Class[] { Hello.class }, handler);
    hello.morning("Bod");
  }
}

interface Hello {
  void morning(String name);
}
