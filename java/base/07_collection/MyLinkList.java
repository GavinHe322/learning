import java.util.*;

public class MyLinkList {
  public static void main(String[] args) {
    Queue<String> q = new LinkedList<>();
    q.offer("apple");
    q.offer("pear");
    q.offer("banana");
    System.out.println(q.element());
    System.out.println(q.toString());

    /**
     * 小结
     * add /offer 将元素添加到队尾
     * remove/poll 从队首获取元素并删除
     * element/peek 从队首获取元素但不能删除
     */

  }
}