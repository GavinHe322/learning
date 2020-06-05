# 包装类型

**基本类型**
- byte
- short
- int
- long
- boolean
- float
- double
- char

**引用类型**
- class
- interface

引用类型可以复制为 ```null```, 但基础类型不能赋值为 null

```java
String n = null;
int n = null; // compiler error!
```


## 小结
- Java核心库提供的包装类型可以把基本类型包装为 ```class```
- 包装类型的比较必须使用 ```equals()```
- 整数和浮点的包装类型都继承自 ```Number```
- 包装类型提供了大量实用方法
