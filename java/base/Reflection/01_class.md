# Class 类

除 ```int``` 基本类型外，Java 的其他全是 ```class``` 包括 ```interface``` eg:
- String
- Object
- Runnable
- Exception
- ...

结论: ```class``` (包括 interface) 的本质是 数据类型(Type)。邬吉成关系的数据类型无法赋值

```java
Number n = new Double(123.456); // ok!
String n = new Double(123.456); // compiler error!
```

每加载一种 ```class```，```JVM``` 就为其创建一个 ```Class``` 类型的实例，并关联起来。注意：这里的 ```Class``` 类型是一个名叫 ```Class``` 的 ```class``` 。它长这样：

```java
public final class Class {
  private Class() {}
}
```

以 ```String``` 类为例，当 ```JVM``` 加载 ```String``` 类时，它首先读取 ```String.class``` 文件到内存，然后，为 ```String``` 类创建一个 ```Class``` 实例并关联起来:

```java
Class cls = new Class(String);
```


```shell
Class Instance   --------> String
name = "java.lang.String"
package = "java.lang"
super = "java.lang.Object"
interface = CharSequence...
field = value[], hash, ...
method = indexOf()...
```

## 小结
- ```Jvm``` 为每个加载的 ```class``` 及 ```interface``` 创建对相应的 ```Class``` 实例来保存 ```class``` 及 ```interface``` 的所有信息
- 获取一个 ```class``` 对应的 ```Class``` 实例后，就可以获取该 ```class``` 的所有信息
- 通过 ```Class``` 实例获取 ```class``` 信息的方法称为反射 (Reflection)
- ```JVM``` 总是动态加载 ```class```，可以在运行期根据条件来控制加载 ```class``
