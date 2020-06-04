# 接口

在抽象类中，抽象方法本质上是定义接口规范：即规定高层类的接口，从而保证所有子类都有相同的接口实现，这样，多态就能发挥出威力。

如果一个抽象类没有字段，所有方法都是抽象方法

```java
abstract class Person {
  public abstract void run();
  public abstract String getName();
}
```

就可以把改抽象类改写为接口: ```interface```

```java
interface Person {
  void run();
  String getName();
}
```

```interface``` 是比抽象类还要抽象的纯抽象接口，因为它连字段都不能有，接口定义的所有方法默认都是 ```public abstract```

```java
// 调用接口时，使用 implements 字段
class Student implements Person {
  private String name;
  public Student(String name) {
    this.name = name;
  }
  
  @Override
  public void run() {
    System.out.println(this.name + "run");
  }

  @Override
  public String getName() {
    return this.name;
  }
}
```

```java``` 中，一个类只能继承一个类，但是一个类可以实现多个 ```interface```

```java
class Student implements Person, Hello { // 实现了两个类
}
```

## 术语

|  | abstract class | interface |
|-|-|-|
| 继承 | 只能 ```extends``` 一个 ```class``` | 可以 ```implements``` 多个 ```interface```|
| 字段 | 可以定义实例字段 | 不能定义实例字段 |
| 抽象方法 | 可以定义抽象方法 | 可以定义抽象方法 |
| 非抽象方法 | 可以定义非抽象方法 | 可以定义 ```default``` 方法 |

## 接口继承

```java
interface Hello {
  void hello();
}

interface Person extends Hello {
  void run();
  String getName();
}
```

## default 方法

default 方法的目的时，当我们需要给接口新增一个方法时，会涉及到修改全部子类。

如果新增的时 default 方法，那么子类就不必全部修改，只需要在需要腹泻新增方法

default 方法和抽象类的普通方法是有所不同的。因为 ```interface``` 没有字段，```default```方法无法访问字段，而抽象类可以访问实例字段


## 小结

- Java 的接口(interface) 定义了纯抽象规范，一个类可以实现多个接口
- 接口也是数据类型，适用于向上转型和向下转型
- 接口所有方法都是抽象接口，接口不能定义实例字段
- 接口可以定义 ```default``` 方法 (jdk >= 1.8)
