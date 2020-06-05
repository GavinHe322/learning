# BigDecimal

和 BigInteger 类似，```BigDecimal``` 可以表示任意大小且精确完全正确的浮点数


```java
BigDecimal bd = new BigDecimal("123.4567");
System.out.println(bd.multiply(bd)); // 15241.55677489
```

## 比较

```java
BigDecimal d1 = new BigDecimal("123.456");
BigDecimal d2 = new BigDecimal("123.45600");

System.out.println(d1.equals(d2)); // false,因为scale不同
System.out.println(d1.equals(d2.stripTrailingZeros())); // true,因为d2去除尾部0后scale变为2
System.out.println(d1.compareTo(d2)); // 0
```

## 小结

- ```BigDecimal``` 用于表示精确的小数，常用于财务计算
- 比较 ```BigDecimal``` 的值是否相等，必须使用 ```compareTo()``` 而不能使用 ```equals()```