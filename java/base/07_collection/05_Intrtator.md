# 使用 Iterator

实际上，Java 编译器并不知道如何遍历 List。
因为变起义把 ```for each```循环通过 ```Iterator``` 改写为了普通的 ```for``` 循环

```java
for (Iterator<String> it = list.iterator(); it.hasNext();) {
  String s = it.next();
}
```

我们把这种通过 ```Iterator``` 对象遍历集合的模式成为迭代器

## 小结
```Iterator``` 是一种抽象的数据访问模型。使用 ```Iterator``` 模式进行迭代的好处有:
- 对任何集合都采用同一种访问模型
- 调用者对集合内部结构一无所知
- 集合类返回的 ```Iterator``` 对象知道如何迭代

Java 提供了标准的迭代器模型，即集合类实现 ```java.util.Iterable``` 接口，返回```java.util.Iterator```