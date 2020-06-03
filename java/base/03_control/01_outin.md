# 输入与输出

## 输出
```println``` 是 ```print line``` 的缩写 ，表示换行输出，使用 ```print``` 将不换行

```java
System.out.print("A");
System.out.print("B");
System.out.print("C");
// A B C

System.out.println("A");
System.out.println("B");
System.out.println("C");
/**
 * A
 * B
 * C
 * /
```

## 格式化输出

使用 ```printf``` 将数据格式化输出，并通过占位符 ```%?```, ```print``` 会将后面的参数替换

```java
double d = 3.1415926;
System.out.printf("%.2f\n", d); // 3.14
System.out.printf("%.4f\n", d); // 3.1416
```

## 占位符
- %d 正数
- %x 十六进制
- %f 浮点数
- %e 科学计数法的浮点数
- %s 字符串

```java
int n = 123456;
System.out.printf("n=%d, hex=%08x", n, n);
```


## 输入
注释有中文情况 ```javac -encoding UTF-8 Input.java```

./Input.java


