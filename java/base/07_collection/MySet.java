import java.util.*;

public class MySet {
  public static void main(String[] args) {
    Set<String> set = new HashSet<>();
    System.out.println(set.add("abc")); // true
    System.out.println(set.add("xyz")); // true
    System.out.println(set.add("abc")); // false

    System.out.println(set.toString());
    System.out.println(set.size());


    Set<String> set2 = new HashSet<>();
    set2.add("b");
    set2.add("a");
    set2.add("c");
    for(String s: set2) {
      System.out.println(s);
    }
  }
}