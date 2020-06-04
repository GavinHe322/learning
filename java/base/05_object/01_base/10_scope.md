# 作用域

```public```、```protected```、```private```这些修饰符。在 java 中，都可以用来限定访问作用域

## public

定义为 ```public``` 的 ```class```、```interface``` 可以被任何其他类访问:

```java
package abc;
public class Hello {
  public void hi() {}
}
```

## private

定义为 ```private``` 的 ```field```、```method``` 无法被其他类访问

推荐将 ```private``` 放在后面，通常阅读代码时，更关注 ```public``` 方法

## protected

```protected``` 作用于继承关系。能被子类访问

## package

包作用域是指一个类允许访问一同个 ```package``` 的没有 ```public```、```private``` 修饰 ```class```，以及没有 ```public```、```protected```、```private``` 修饰的字段和方法

```java
package abc;
class Hello {
  // package 的权限的方法
  void hi(){}
}
```

```java
package abc;
class Main {
  void foo() {
    Hello h = new Hello();
    // 可以调用package 权限的方法
    h.hi();
  }
}
```

## 局部变量

局部变量作用域从 **变量声明** 处开始到对应的块结束。

## final

用 ```final``` 修饰 ```class``` 可以阻止被继承

```java
package abc;
public final class Hello {
  private int n = 0;
  protected void hi(int t) {
    long i = t;
  }
}
```

用 ```final``` 修饰 ```method``` 防止多态

```java
public class Hello {
  protected final void hi(){}
}
```

## 最佳实践

- 如果不确定是否需要 ```public```，就不声明为 ```public```，即尽可能少地暴露对外的字段和方法。
- 把方法定义为 ```package权限``` 有助于测试，因为测试类和被测试类只要位于同一个```package```，测试代码就可以访问被测试类的```package权限```方法。
- 一个 ```.java``` 文件只能包含一个 ```public``` 类，但是可以包含多个 ```非public``` 类，文件名必须跟 ```public``` 类名字相同


## 小结

- Java 内建的访问权限包括 ```public```、```protected```、```private``` 和 ```package权限```
- Java 在方法内部定义的变量是局部变量，局部变量的作用域从变量声明开始，到一个块结束
- final 修饰符不是访问权限，它可以修饰 ```class```、```field``` 和 ```method```
- 一个 ```.java``` 文件只能包含一个 ```public``` 类，但可以包含多个 ```非public``` 类。
