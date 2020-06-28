import java.io.*;

public class MyFile {
  public static void main(String[] args) {
    File f = new File("./demo.txt");
    
    System.out.println(f.isFile());

    /**
     * 用 File 对象获取一个文件时，还可以进一步判断文件的权限和大小
     * 
     * boolean canRead()  读权限
     * boolean canWrite() 写权限
     * boolean canExecute() 是否可执行
     * long length()  文件字节大小
     */

     if (f.canRead()) {
       System.out.println("canRead");
     }

    /**
     * 和文件操作类似，File 对象如果表示一个目录，可以通过以下方法创建和删除目录
     * boolean mkdir()
     * boolean: mkdirs()
     * boolean: delete()
     */
     File demo = new File("./demo");
     System.out.println(demo.isDirectory());
    //  demo.mkdirs();
    //  demo.delete();
  }
}