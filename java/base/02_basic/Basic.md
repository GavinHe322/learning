## 基础机构

```java
/**
 * 注释
 */
public class Hello {
  public static void main(String[], args) {
    System.out.println("Hello, world!");
  }
} // class 定义结束
```

### 类名要求
- 英文开头，后接字母，数字下划线的组合
- 大写开头

### 好的类名
- Hello
- NoteBook
- VRPlayer


```public``` 是修饰符，表示该 ```class```是公开的。

不写 ```public```，也能正常编译，但是这个类将无法从命令行执行

在 ```class``` 内部，可以定义若干方法（method）：
```java
public class Hello {
    public static void main(String[] args) { // 方法名是main
        // 方法代码...
    } // 方法定义结束
}
```

## 好的方法命名
- main
- goodMorning
- playVR

必须以分好结尾

