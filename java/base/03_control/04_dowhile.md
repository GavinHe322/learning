# do while 循环

和 while 区别，while 先判断条件，后执行，do while 反之。

```java
int sum = 0;
int n = 1;
do {
  sum = sum + n;
  n++;
} while ( n <= 100);
System.out.println(sum);
```

