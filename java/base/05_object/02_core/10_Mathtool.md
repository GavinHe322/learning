# 常用工具

## Math

```java
// 绝对值
Math.abs(-100); // 100

// 最小大值
Math.max(1, 2); // 2
Math.min(1, 2); // 1

// 计算x 次方
Math.pow(2, 10); // 2的10次方 = 1024

// 求根
Math.sqrt(2); // 1.414...

// 以 e 为低的对数
Math.log(4); // 1.386;

// 计算以 10 为低的对数
Math.log10(100); // 2

// 三角函数
Math.sin(3.14); // 0.9999...
Math.cos(3.14); // -0.9999...
Math.tan(3.14); // -0.0015...
Math.asin(1.0); // 1.57079..
Math.acos(1);   // 0.0

// 常量
double pi = Math.PI;
double e = Math.E;
Math.sin(pi / 6); // sin(Π / 6) = 0.5


// 随机数
```java
double x = Math.randow();
double min = 10;
double max = 50;
double y = x * (max - min) + min;
long n = (long) y;

```