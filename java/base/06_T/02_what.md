# 什么是泛型

```ArrayList```

```java
public class ArrayList {
  private T[] array;
  public int size;
  public void add(T e) {/* ... */ }
  public void remove(int index) {/* ... */ }
  public T get(int index) { /* ... */ }
}
```

## 小结
泛型就是编写模板代码来适应任意类型；
