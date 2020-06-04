# 抽象类


```java
abstract class Person {
  // 如果父类的 run 只是定义了，但无用实际用处，不能直接省略执行语句，需要增加 abstract
  public abstract void run();
}

class Student extends Person {
  @Override
  public void run() {
    System.out.println("Student.run");
  }
}

Student p = new Student();
p.run();
```

**面向抽象编程的本质就是:**
- 上层代码只定义规范 (eg: abstract class Person
- 不需要子类就可以实现业务逻辑 (正常编译)
- 具体的业务逻辑由不同的子类实现，调用者并不关心。

## 小结

- 通过  ```abstract``` 定义的方法是抽象方法，它只是定义，没有实现。抽象方法定义了子类必须实现的接口规范。
- 定义了抽象方法的 ```class```被定义位抽象类，从抽象类继承的子类必须实现抽象方法
- 如果不实现抽象方法，则改子类仍是一个抽象类
- 面向抽象编程使得调用者只关心抽象方法的定义，不关心子类的具体实现
