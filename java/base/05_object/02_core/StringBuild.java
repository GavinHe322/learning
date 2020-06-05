public class StringBuild {
  public static void main(String[] args) {
    StringBuilder sb = new StringBuilder(1024);
    sb.append("Mr")
      .append("bob")
      .append("!")
      .insert(0, "Hello, ");
    System.out.println(sb.toString());
  }  
}