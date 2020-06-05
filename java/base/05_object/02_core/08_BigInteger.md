# BigInteger

## BigInteger

cpu 原生提供的整型最大范围是 64位 long 型证书。使用 ```long``` 能直接通过 ```CPU``` 指令进行计算，速度非常快

当整数范围超过了 ```long```， 则需要使用 ```java.math.BigInteger```

```java
BigInteger bi = new BigInteger("1234567890");
System.out.println(bi.pow(5));  // 2867971860299718107233761438093672048294900000
```

**缺点是: 慢**

## 小结

- ```BigInteger``` 用于表示任意大小的整数；
- ```BigInteger``` 是不变类，并且继承自 ```Number```
- 将 ```BigInteger``` 转换成基本类型时可使用 ```longValueExact()``` 等方法保证结果准确。
