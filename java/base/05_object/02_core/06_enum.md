
# 枚举类

```java
./Enum.java
```

给 ```enum``` 添加变量

```java
默认情况下，对枚举常量调用toString()会返回和name()一样的字符串。但是，toString()可以被覆写，而name()则不行。我们可以给Weekday添加toString()方法：
```

## 小结
- ```Java``` 使用 ```enum``` 定义枚举类型，它被编译器编译为 ```final class Xxx extends Enum```
- 通过 ```name()``` 获取常量定义的字符串，注意不要使用 ```toString()```
- 通过 ```ordinal()``` 返回常量定义的顺序 (无实质意义)
- 可以为 ```enum``` 编写构造方法、字段和方法
- ```enum```的构造方法要生命 ```private```，字段强烈建议声明为 ```final``
- ```enum``` 适合用在 ```switch``` 语句中
