# JavaBean

符合以下命名规范的 成为 ```JavaBean```

```java
// 读方法
public Type getXyz()
// 写方法
public void setXyz(Type value)

// 如果是布尔值
public Type isXyx()
```

## JavaBean 的作用

JavaBean 可以方便地被IDE工具分析，生成读写属性的代码，主要用在图形界面的可视化设计中。

## 枚举 JavaBean

枚举 JavaBean 的所有属性，可以直接使用 Java 核心库提供的 ```Introspector```


## 小结
- ```JavaBean``` 是一种符合命名规范的 ```class```，通过 ```getter``` 和 ```setter``` 来定义属性
- 属性是一种通用的叫法，并非 ```java```语法规定
- 可以利用 IDe 快速生成 ```getter``` 和 ```setter```
- 使用 ```Introspector.getBeanInfo()``` 可以读取属性列表
