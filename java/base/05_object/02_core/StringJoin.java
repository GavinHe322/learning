import java.util.StringJoiner;

public class StringJoin {
  public static void main(String[] args) {
    String[] names = {"Gavin", "Alice", "Grace"};

    StringJoiner sj = new StringJoiner(", ", "Helo ", "!");
    for (String name : names) {
      sj.add(name);
    }
    System.out.println(sj.toString());

    String s = String.join(", ", names);
    System.out.println(s);
  }  
}