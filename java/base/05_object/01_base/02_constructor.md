# 构造方法

创建实例时可以直接初始化的方法，构造方法的名称就是类名。

```java
class Person {
  private String name;  // 默认初始为 null
  private int age;      // 默认初始是0
  private Boolean sex;  // 布尔值默认 false
  public Person(String name, int age) {
    this.name = name;
    this.age = age;
  }
}
Person p = new Person("小明", 18);
```

如果没有定义构造函数，编译器会自动生成一个默认的构造方法，没有任何参数；如果定义了构造函数，则不自动创建构造方法。

```java
class Person {
  public Person(){
  }
}
```

既想带参数的构造方法，又想保留不戴参数的构造方法，则定义两个构造方法

```java
class Person {
  private String name;
  public Person (){
  }

  public Person(String name) {
    this.name = name;
  }
}
```
