# 多态

**注意：方法名相同，方法参数相同，但方法返回值不同，也是不同的方法。在 Java 程序中，出现这种情况，编译器回报错。**

```java
class Person {
  public void run() {}
}

public class Student extends Person {
  @Override
  public void run(String s) {}
}
```