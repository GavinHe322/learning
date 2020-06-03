# 字符和字符串

在 Java 中、字符和字符串是两种不同的类型。

## 字符类型
```java
char c1 = 'A';
char c2 = '中';
```

java 在内存中总是使用 Unicode 表示字符，一个字符(英中)都用一个 char 类型表示，占两字节。

```java
// 要显示一个字符的 unicode 编码
int n1 = '中'; // 字符 A 的 unicode 编码是 65
int n2 = '中'; // 汉字 中 的 unicode 编码是 20013

// \u + unicode 编码来表示一个字符
char c3 = '\u0041'; // A，因为十六进制0041 = 十进制 65
```

## 字符串类型

和 char 类型不同，字符串类型 ```String``` 是引用类型，我们用双引号表示字符串。

```java
String s = "";
String s1 = "A";
// 包含 " 使用转义字符 \
String s2 = "ABC\"中文";
String s2 = "ABC\\中文";
```

## null

```java
String s1 = null;
String s2;
String s3 = s1;
String s4 = ""; // 指向空字符串，不为null
```
