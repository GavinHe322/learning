
// 数组排序

// 冒泡排序

import java.util.Arrays;

public class SortArray {
  public static void main(String[] args) {
    int[] ns = {28,  29, 49, 10, 20, 305, 2};

    System.out.println(Arrays.toString(ns));

    // 冒泡排序
    // for (int i = 0; i  < ns.length  - 1; i++) {
    //   for (int j = 0; j < ns.length - i -1; j++) {
    //     if (ns[j] > ns[j+1]) {
    //       int tem = ns[j];
    //       ns[j] = ns[j + 1];
    //       ns[j + 1] = tem;
    //     }
    //   }
    // }
    // System.out.println(Arrays.toString(ns));
    Arrays.sort(ns);
    System.out.println(Arrays.toString(ns));
  }
}