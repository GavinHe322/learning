# 方法

 一个 ```class``` 可以包含多个 ```field```，例如，我们给 Person 类就定义了两个 field:

```java
class Persion {
  public String name;
  public int age;
}


Person ming = new Person();
ming.name = "xiao ming";
ming.age = -99;
```

直接操作 field，容易造成逻辑混论。为了避免外部代码直接访问 field，我们用private 修饰 field，拒绝外部访问。

```java
class Person {
  private String name;
  private int age;
}

Person ming = new Person();
ming.name = 'xiao ming';   // name has private access in Person
ming.age = "";
// compiler failed
```

将 ```field``` 从 ```public``` 改为 ```private```，通过 ```method```，间接修改 ```field```

```java
class Person {
  private String name;
  private int age;

  public String getName() {
    return this.name;
  }

  public void setName(String name) {
    this.name = name;
    System.out.println("name reset: " + name);
  }
}

Person ming = new Person();
ming.setName("Xiao ming");
System.out.println(ming.getName())
```


## 方法定义

```java
修饰符 方法返回类型 方法名(方法参数列表) {
  语句
  return 返回值
}
```

## private 方法

私有属性，可以在内部调用


## this 变量

在方法内部，可以使用隐含的变量 this，它始终指向当前实例。

```java
// 如果内有明明冲突，可以省略 this
// eg:

class Person {
  private String name;

  public String getName() {
    return name; // be equal to this.name
  }
}
```

如果局部变量和字段重名，那么具有优先级高

```java
class Person {
  private String name;

  public void setName(String name) {
    this.name = name; // 前面的 this不可少
  }
}
```

## 方法参数

```java
class Person {
  private String name;
  private int age;

  public void setNameAndAge(String name, int age) {
    this.name = name;
    this.age = age;
  }
}
```

## 可变参数

可变参数用 类型... 定义，可变参数相当于数组类型。

```java
class Group {
  private String[] names;

  public void setName(String... names) {
    this.names = names;
  }
}
Group g = new Group();

g.setName("xiao ming", "Gavin", "lucy");
g.setName();

// 问题
g.setName(null);
// 可变参数无法保证无法传入 null，因为传入0个参数时，接受的实际值是一个数组而不是 null。
```

## 参数绑定

意思为 改变传入的基本类型不会受影响，引用类型则会

```java
class Person {
  private String[] name;
  private int age;
  public void setNameAndAge(String[] name, int age) {
    this.name = name;
    this.age = age;
  }
}

int n = 10;
int String[] name = new String[] {"Gavin", "Lucy"};

Person p = new Person();
p.setNameAndAge(name, n)

n = 20; // p.age 不受影响
name[0] = "jerry";  // p.name[0] = "jerry"
```

## 小结
- 方法可以让外部代码安全地访问实例字段
- 方法是一组执行语句，并且可以执行任意逻辑
- 方法内部遇到return时返回，void表示不返回任何值（注意和返回null不同）
- 外部代码通过public方法操作实例，内部代码可以调用private方法
- 理解方法的参数绑定