import java.util.ArrayList;
import java.util.List;
import java.util.Iterator;

public class MyList {
  public static void main(String[] args) {
    List<String> list = new ArrayList<String>();

    list.add("apple");
    list.add("pear");
    list.add("apple");
    String second = list.get(0);
    System.out.println(list.size());
    System.out.println(second);

    List<Integer> list2 = List.of(1, 2, 3);
    // 不推荐，没有ArratList高效
    for (int i = 0; i < list2.size(); i++) {
      Number n = list2.get(i);
      System.out.println(n);
    }
    // 使用 Iterator 迭代器访问
    for (Iterator<String> it = list.iterator(); it.hasNext(); ) {
      String s = it.next();
      System.out.println(s);
    }
    // for of
    for (Number n : list2) {
      System.out.println(n);
    }

    // List 和 Array 转换
    Object[] array = list2.toArray();
    for(Object n: array) {
      System.out.println(n);
    }

    // Array 转 list
    Integer[] array2 = {1, 2, 3};
    System.out.println(array2.toString());
    List<Integer> list3 = List.of(array2);
    System.out.println(list3.toString());
  }
}