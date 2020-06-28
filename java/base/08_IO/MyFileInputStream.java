import java.io.InputStream;
import java.io.FileInputStream;
import java.io.IOException;


/**
 * InputStream 是 Java 标准库最基本的输入流，抽象类，所有输入流的超类
 */

public class MyFileInputStream {
  public static void main(String[] args) throws IOException {
    // InputStream input = new FileInputStream("./demo/demo.txt");

    // for (;;) {
    //   int n = input.read();
    //   if (n == -1) {
    //     break;
    //   }
    //   System.out.println(n);
    // }
    // // 关闭流就会释放对应的底层资源。
    // input.close();

    // try(InputStream input = new FileInputStream("./demo/demo.txt")) {
    //   int n;
    //   while ((n = input.read()) != -1) {
    //     System.out.println(n);
    //   }
    //   // 编译器在此自动为我们写入 finally 并调用 close()
    // }


    // 缓冲

    try(InputStream input = new FileInputStream("./demo/demo.txt")) {
      byte[] buffer = new byte[1000];
      int n;
      // while ((n = input.read()) != -1) {
        // System.out.println("read" + n + "bytes");
      String sbString =  readAsString(input);
      System.out.println(sbString);
      // }
    }
  }

  public static String readAsString(InputStream input) throws IOException {
    int n;
    StringBuilder sb = new StringBuilder();
    while((n = input.read()) != -1) {
      sb.append((char) n);
    }
    return sb.toString();
  }
}
