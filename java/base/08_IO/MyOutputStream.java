import java.io.*;

public class MyOutputStream {
  public static void main(String[] args) throws IOException{
    // OutputStream output = new FileOutputStream("./demo/output.txt");
    // // output.write(72);
    // // output.write(101);
    // // output.write(108);

    // output.write("Hello".getBytes("UTF-8"));
    // output.close();

    // try(OutputStream output = new FileOutputStream("./demo/output.txt")) {
    //   output.write("hello\rworld".getBytes("UTF-8"));
    // } // 编译器会在此自动为我们写入 finally 并调用 close()

    // 阻塞

    byte[] data;
    try(ByteArrayOutputStream output = new ByteArrayOutputStream()) {
      output.write("hello ".getBytes("UTF-8"));
      output.write("world!".getBytes("UTF-8"));
      data = output.toByteArray();
    }
    System.out.println(new String(data, "UTF-8"));

  }
}