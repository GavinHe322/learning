import java.util.Arrays;

public class Traversal {
  public static void main(String[] args) {
    int[] ns = {1, 2, 3, 4, 5, 6, 7, 8, 9};
    System.out.println(ns);

    // for 循环
    for (int i = 0; i < ns.length; i++) {
      int n = ns[i];
      System.out.println("for: " + n);
    }

    // for each
    for (int n : ns) {
      System.out.println("for each: " + n);
    }

    System.out.println("Array.toString");
    System.out.println(Arrays.toString(ns));
    
  }
}
