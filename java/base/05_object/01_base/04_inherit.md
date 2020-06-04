
# 继承

java 使用 extends 关键字来实现继承:

```java
class Person {
  private String name;
  private int age;

  public String getName(){}
  public void setName(String name) {}
  public int getAge() {}
}

class Student extends Person {
  private int score;

  public int getScore() {}
  public void setScore(int score) {}
}
```

**注意: 子类自动获得了父类的所有字段，严禁定义与父类重名的字段!**

在 ```OOP``` 术语中，我们把 Person 称为 超类(super class)，父类(parent class)，基类(base class)，子类(subclass),拓展类(extend class)。


## protected

继承有个特点，就是子类无法访问父类的 ```private``` 字段/方法。

为了能放子类访问父类的字段/方法，需将 ```private``` 改为 ```protected```。

```java
class Person {
  protected String name;
}

class Student extends Person {
  public String hello(){
    return "Hello," + name; // ok
  }
}
```

## super

```super``` 表示父类，子类引用父类的字段时，可以用 ```super.fieldName```

```java
class Student extends Person {
  public String hello() {
    return "Hello," + super.name;
  }
}


class Person {
  protected String name;
  protected int age;
  public Person(String name, int age) {
    this.name = name;
    this.age = age;
  }
}

class Child extends Person {
  public Student(String name, int age, int score) {
    super(name, age); // 调用父类的构造方法
    this.score = score;
  }
}

// 问题：子类不会继承任何父类的构造方法。子类默认的构造方法是编译器生成的，不是继承的。
```

## 向上转型

如果 ```Student``` 是从 ```Person``` 继承而来，那么，一个引用类型的 ```Person```的变量，能否指向 ```Student``` 类型的实例?

```java
Person p = new Student();

// 向上转型实际上是把一个子类型安全地变为更加抽象的父类型：

Student s = new Student();
Person p = s; // upcasting, ok
Object o1 = p; // upcasting, ok
Object o2 = s; // upcasting, ok
```


## 向下转型

和向上转型相反，如果把一个父类型强制转换为子类型，就是向下转型(downcasting)。

```java
Person p1 = new Student(); // upcasting ok
Person p2 = new Person();

Student s1 = (Student) p1; // ok
Student s2 = (Student) p2; // runtime error! ClassCastException!
```

问题： 向下转型会失败。

使用 instanceof 操作符，先判断一个实例究竟是不是某种类型:

```java
Person p = new Person();
System.out.println(p instanceof Person); // true
System.out.println(p instanceof Student); // false

Student s = new Student();
System.out.println(s instanceof Person); // true
System.out.println(s instanceof Student); // true

Student n = null;
System.out.println(n instanceof Student); // false
```

## 小结
- 继承时面向对象编程的一种强大的代码复用方式
- Java 只允许单继承，所有类最终的根类时 ```object```
- protected 允许子类访问父类的字段和方法
- 子类构造函数通过 ```super()``` 调用父类的构造方法
- 可以安全的向上转型位更抽象的类型
- 可以强制向下转型，最好借助 ```instanceof``` 判断
- 子类和父类的关系时 ```is```，```has``` 关系不能用继承。
