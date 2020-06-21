import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class MyT {
  public static void main(String[] args) {
   
    
    // 编译器警告
    // List list = new ArrayList();
    // list.add("Hello");
    // String first = (String) list.get(0);
    // String secend = (String) list.get(1);

    // 无编译器警告
    List<String> list = new ArrayList<String>();
    // <String>可省略<自动推断泛型类型
    // List<String> list = new ArrayList<>();
    list.add("Hello");
    list.add("world");
    String first = list.get(0);
    String secend = list.get(1);

    System.out.println(first + ":" + secend);

    // 泛型接口
    String[] ss = new String[] {"orange", "Apple", "Pear"};

    Arrays.sort(ss);
    System.out.println(Arrays.toString(ss));

    
  }
}