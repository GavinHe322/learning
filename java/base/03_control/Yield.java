public class Yield {
  public static void main(String[] args) {
    String fruit = "orange";
    int opt = switch (fruit) {
      case "apple" -> 1;
      case "pear", "mango" ->2;
      default -> {
        int code = fruit.hashCode();
        yield code;
      }
    };
    System.out.print("opt = " + opt);
  }
}
