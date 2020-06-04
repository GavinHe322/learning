# 方法重载

功能类似的方法，根据参数不用，实现不用的效果。

```java
class Hello {
  public void hello() {
    System.out.println("Hello, World!");
  }

  public void hello(String name) {
    System.out.println("Hello," + name + "!");
  }

  public void hello(String name, int age) {
    System.out.println("name is %s, age is %d", name, age);
  }
}
```

## 小结
- 方法重载时指多个方法的方法名相同，但各自的参数不用
- 重载方法应该完成类似的功能，参考 ```String``` 的 ```indexOf()```
- 重载方法返回值类型应该相同
