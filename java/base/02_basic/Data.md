## 变量
变量就是初中数学的代数的概念，例如一个简单的方程，x，y都是变量:

```
y = x² + 1
```

## 分类
基本类型的变量 && 引用类型的变量


## 基本类型
```java
int x = 1;
```


## 基本数据类型
基本数据类型是 CPU 可以直接进行运算的类型。Java 定义了一下集中基本类型
- 整数类型: byte、short、int、long
- 浮点类型: float、double
- 字符类型: char
- 布尔类型: boolean

计算机内存的最小存储单元是字节(byte)，一个字节就是一个8位二进制，即8个bit。它的二进制表示范围从 ```00000000``` ~ ```11111111```，换算成十进制是 0~255，换算成十六进制是 ```00``` ~ ```ff```


内存单元从 0 开始编号，称为内存地址。每个内存单元可以看做一件房间，内存地址就是门牌号。


一个字节是1byte，1024字节是1K，1024K是1M，1024M是1G，1024G是1T。一个拥有4T内存的计算机的字节数量就是：

```java
4T = 4 x 1024G
   = 4 x 1024 x 1024M
   = 4 x 1024 x 1024 x 1024K
   = 4 x 1024 x 1024 x 1024 x 1024
   = 4398046511104
```

## 整形
- byte: -128 ~ 127
- short: -32768 ~ 32767
- int: -2147483648 ~ 2147483647
- long: -9223372036854775808 ~ 9223372036854775807

## 浮点型

```java
float f1 = 3.14f;
float f2 = 3.14e38f; // 3.14x10^
double d = 1.79e308;
double d2 = -1.79e308;
double d3 = 4.9e-324; // 4.9x10^-324
```
float 类型，需要加 ```f``` 后缀

float 类型最大可表示 3.4x10<sup>38</sup>

double 类型最大可仪表示 1.79x10<sup>308</sup>

## 布尔类型
```java
boolean b1 = true;
boolean b2 = false;
boolean isGreater = 5 > 3; // true
int age = 12;
boolean isAdult = age >= 20; // false

JVM 内存将 boolean 表示为四字节整数
```

## 字符类型

```java
public class Main {
  public static void main(String[] args) {
    char a = 'A';
    char zh = '中';
    System.out.println(a);
    System.out.println(zh);
  }
}
```
**主义 ```char``` 类型使用单引号```'```,仅有一个字符，要和双引号```"```的字符串类型区分开来**

## 引用类型

除基本类型，剩下的都是引用类型。例如，引用类型最常用的就是 ```String```

```java
String s = "hello";
```
引用类型的变量类似于 C 语言的指针，它内部存储一个"地址"，指向某个对象在内存的位置，后续我们介绍类的概念时会详细讨论。


## 常量

在变量前 final 修饰符，将变量提升为常量。

```java
final double PI = 3.14;
double r = 5.0;
double area = PI * r * r;
PI = 300; //compile error!
```

## var关键字
```java
StringBuilder sb = new StringBuilder();

// 省略变量类型，可以使用 var 关键字:
var sb = new StringBuilder();

// 编译器会根据赋值语句自动推断出变量 sb 的类型是 StringBuilder。

// 实际还是变回第一条
StringBuilder sb = new StringBuilder();
```

## 变量的作用范围
```java
{
    ...
    int i = 0; // 变量i从这里开始定义
    ...
    {
        ...
        int x = 1; // 变量x从这里开始定义
        ...
        {
            ...
            String s = "hello"; // 变量s从这里开始定义
            ...
        } // 变量s作用域到此结束
        ...
        // 注意，这是一个新的变量s，它和上面的变量同名，
        // 但是因为作用域不同，它们是两个不同的变量:
        String s = "hi";
        ...
    } // 变量x和s作用域到此结束
    ...
} // 变量i作用域到此结束
```

## 小结

- Java提供了两种变量类型：基本类型和引用类型

- 基本类型包括整型，浮点型，布尔型，字符型。

- 变量可重新赋值，等号是赋值语句，不是数学意义的等号。

- 常量在初始化后不可重新赋值，使用常量便于理解程序意图。
