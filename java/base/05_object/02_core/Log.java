
public class Log {
  public static void main(String[] args) {
    Point p = new Point(10, 20);
    System.out.println(p.x());
    System.out.println(p.y());

    // Point1 p1 = new Point1(1, 2);
    // System.out.println(p1.x());
  }
}

// 原来
public final class Point {
  private  final int x;
  private final int y;

  public Point(int x, int y) {
    this.x = x;
    this.y = y;
  }

  public int x() {
    return this.x;
  }
  public int y() {
    return this.y;
  }
}

// record
// public record Point1(int x, int y) {}
