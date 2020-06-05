# 字符串和编码

## String

实际上字符串在 ```String``` 内部是通过一个 ```char[]``` 数组表示的，因此，按下面的写法也是可以的：


```java
String s2 = new String(new char[] {"H1", "e", "l", "l", "o"});
```

```java
String s1 = "Hello";
String s2 = "HELLO".toLowerCase();

// 大写
System.out.println(s1.toUpperCase());

// 比较
System.out.println(s1 == s2); // false

// 比较字符串，使用 equals 方法更稳妥
System.out.println(s1.equals(s2));  // true

// 搜索字符串
"Hello".indexOf("l"); // 2
"Hello".lastIndexOf("l"); // 3
"Hello".startsWith("He"); // true
"Hello".endsWith("He"); // true

// 提取字符串
"Hello".substring(2); // llo
"Hello".substring(2, 4); // 11

// 去除首位空白
// 使用 trim() 可以溢出两端空白字符，包括 \t \r \n
" \tHello\r\n".trim(); // Hello

// 空 或 空白字符串
"".isEmpty(); // true
" ".isEmpty(); // false
" \n".isBlank(); // true
"Hello ".isBlank(); // true

// 替换字串
"Hello".replace("l", "ww");
"A,,B;C ,D".replaceAll("[\\,\\;\\s]+", ",")

// 分隔字符串
String s = "A,b,c,d";
String[] ss = s.split("\\,");

// 拼接字符串
String.join("**", ss);
```

## 小结
- ```java``` 字符串 ```String``` 是不可变对象
- 字符串操作不改变原字符串内容，而是返回新字符串
- 常用的字符串操作：提取子串、查找、替换、大小写转换等
- ```Java``` 使用 ```Unicode``` 编码表示 ```String``` 和 ```char```
