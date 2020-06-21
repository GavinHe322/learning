public class WriteT {
  public static void main(String[] args) {
    Pair pair = new Pair<String, Integer>("nihao", 11);

    System.out.println(pair.getFirst() + ":" + pair.getLast());
    
  }
}

// 多个泛型类型将<T> 改为<T,K>
public class Pair<T, K> {
  private T first;
  private K last;

  public Pair(T first, K last) {
    this.first = first;
    this.last = last;
  }

  public T getFirst() {
    return first;
  }

  public K getLast() {
    return last;
  }
}
/**
 * 小结
 * 编写泛型时，需要定义泛型类型<T>
 * 
 * 静态方法不能引用泛型类型<T>，必须定义其他类型(例如<k>)来实现静态泛型方法
 * 
 * 泛型可以同时定义多种类型，例如Map<K,V>
 */


