# Java 集合简介

集合就是由若干个确定的元素所构成的整体

概念
- 有限集合
  - 一个班所有的同学构成的集合
  - 一个网站所有商品构成的集合
  - ....
- 无限集合
  - 全体自然数：1，2，3，4
  - 有理数集合
  - 实数集合
  - ...

```Java
String[] ss = new String[10];
ss[0] = "hello"; 
String first = ss[0];
```

**数组的限制**
- 数组初始后大小不可变
- 数组只能按索引顺序存取


## Collection

java.util

- List: 一种有序集合
- Set: 一种保证没有重复元素的集合
- Map: 一种通过键值(key-value)查找映射表集合

**Java集合的特点**
- 实现了接口和实现类相分离
- 支持泛型

## 小结

Java 的集合类定义在 ```java.utils```中，支持泛型，只要提供了三种集合 ```List、Set、Map```。Java集合使用统一的 ```Iterator``` 遍历