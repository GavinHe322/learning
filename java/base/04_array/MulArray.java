import java.util.Arrays;

class MulArray {
  public static void main(String[] args) {
    // 二维数组

    int[][][] ns = {
      // {1, 2, 3, 4, 5},
      // {6, 7, 8, 9, 10},
      {
        {1, 2, 3, 4},
        {5, 6, 7, 8}
      },
      {
        {1, 2, 3, 4},
        {5, 6, 7, 8}
      },
      {
        {1, 2, 3, 4},
        {5, 6, 7, 8}
      }
    };
    System.out.println(ns.length);

    System.out.println(Arrays.toString(ns));
    System.out.println(Arrays.deepToString(ns));
  }
}