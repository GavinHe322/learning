import java.util.Arrays;

public class Str {
  public static void main(String[] args) {
    String s = "A,,B;C ,D";
    s = s.replaceAll("[\\,\\;\\s]+", ","); // "A,B,C,D"
    System.out.println(s);

    // 转换要重新定义类型
    String[] ss = s.split("\\,");
    System.out.println(Arrays.toString(ss));

    // 重新定义类型
    s = String.join("***", ss);
    System.out.println(s);

    // 格式化
    /**
     * %s 字符串
     * %d 整形
     * %x 十六进制整数
     * %f 浮点
     */
    String s1 = "Hi %s, your score is %f!";
    System.out.println(String.format(s1, "Bob", 59.5));

    // 类型转换
    char[] cs = "Hello".toCharArray();
    String s2 = new String(cs);
    System.out.println(s2);
    cs[0] = 'X';
    System.out.println(s2);
  }
}