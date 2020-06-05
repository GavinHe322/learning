
# StringBuilder

是一个可变对象，预分配缓存区，类似文档片段，新增字段时，不会创建新的临时对象

```java
StringBuilder sb = new StringBUilder(1024);
for (int i = 0; i < 1000; i++) {
  sb.append(",");
  sb.append(i);
}

String s = sb.toString();
```

## 小结

- StringBuilder 是可变对象，用来高效拼接字符串
- StringBUilder 支持链式操作，返回自身实例
