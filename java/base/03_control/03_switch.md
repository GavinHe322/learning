## switch 多重语句

```java
int option = 99;
switch (option) {
  case 1:
    System.out.print("1");
    break;
  case 2:
    System.out.print("2");
    break;
  default:
    System.out.print("Not Selected");
    break;
}

// Not Selected
```

## yield

用 ```yield``` 返回一个值 作为 ```switch``` 语句的返回值

## -> 新语法
使用 ```->```，如果有多条语句，需要用 ```{}``` 括起来，只执行匹配的语句，没有穿透效应。

```java
// 原始
int opt;
switch (fruit) {
case "apple":
    opt = 1;
    break;
case "pear":
case "mango":
    opt = 2;
    break;
default:
    opt = 0;
    break;
}

// 新语法
public class Main {
    public static void main(String[] args) {
        String fruit = "apple";
        int opt = switch (fruit) {
            case "apple" -> 1;
            case "pear", "mango" -> 2;
            default -> 0;
        }; // 注意赋值语句要以;结束
        System.out.println("opt = " + opt);
    }
}
```