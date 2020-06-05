# 记录类

不变类
- 定义 class 时使用 final，无法派生子类
- 每个字段使用 final，保证创建实例后无法修改任何字段

## record


```java

public final class Point {
  private  final int x;
  private final int y;

  public Point(int x, int y) {
    this.x = x;
    this.y = y;
  }

  public int x() {
    return this.x;
  }
  public int y() {
    return this.y;
  }
}

```

## 小结
- 使用 ```record``` 定义的是不变类
- 可以编写 Compact Constructor
- 可以定义静态方法

