public class ForEach {
  public static void main(String[] args) {
    int[] ns = {1, 2, 3, 4, 5, 6, 7, 8, 9};
    int sum =  0;
    for (int n : ns) {
      sum += n;
      System.out.println(n);
    }
    System.out.println(sum);
  }
}
