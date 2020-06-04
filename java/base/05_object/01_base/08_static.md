# 静态字段和静态方法

修改静态字段，其余实例都会间接修改

```java
class Person {
  public static int number;
}

Person ming = new Person();
Person hong = new Person();

ming.number = 88;
System.out.println(hong.number); // home.number = 88
hong.number = 99;                
System.out.println(ming.number); // ming.number = 99
```

## 静态方法

无需创建子类就能调用的成为静态方法

```java
class Person {
  public static int number;
  public static void setNumber(int number) {
    number = value
  }
}
Person.setNumber(99);
System.out.println(Person.number); // 99
```

实例方法常用的工具类例子：
- Array.sort();
- Math.random();
- 也常用于辅助方法， main() 也是静态方法

## 接口的静态字段

接口不能定义实例字段，但 ```interface``` 是可以有静态字段的，并且静态字段必须是 ```final(常量)```类型

```java
public interface Person {
  public static final int MALE = 1;
  public static final int FEMALE = 0;
}

// 因为 interface 只能是public static final 类型，所以我们可以把修饰符都去掉，简写为:
public interface Person {
  int MALE = 1;
  int FEMALE = 0;
}

// 编译器会将字段变为 public static final
```

## 小结
- 静态字段术语所有实例 "共享" 的字段，实际上属于 ```class``` 的字段
- 调用静态方法不需要实例，无法访问 ```this```，但可以访问静态字段和其他静态方法
- 静态方法常用语工具类和辅助方法
