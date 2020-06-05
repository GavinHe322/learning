
public class Randow {
  public static void main(String[] args) {
    double x = Math.random(); // 范围 [0, 1]
    double min = 10;
    double max = 50;
    double y = x * (max - min) + min; // 范围 [10, 50]

    System.out.println(y);

    System.out.println(Math.random() * 100);

  }
}