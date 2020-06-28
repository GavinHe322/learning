import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;

public class MyURL {
  public static void main(String[] args) {
    String encoded = URLEncoder.encode("https://www.runoob.com/markdown/md-table.html?name=中文!", StandardCharsets.UTF_8);
    System.out.println(encoded);
  }  
}