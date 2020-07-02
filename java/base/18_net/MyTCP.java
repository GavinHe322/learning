import java.net.ServerSocket;
import java.net.Socket;
import java.nio.charset.StandardCharsets;
import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.io.OutputStreamWriter;
import java.lang.Thread;

public class MyTCP {
  public static void main(String[] args) throws IOException {
    ServerSocket ss = new ServerSocket(6666);
    System.out.println("server is running...");
    for(;;) {
      Socket socket = ss.accept();
      System.out.println("conneted from " + socket.getRemoteSocketAddress());
      Thread t = new Handler(socket);
      t.start();
    }
  }
}

class Handler extends Thread {
  Socket socket;

  public Handler(Socket socket) {
    this.socket = socket;
  }

  @Override
  public void run() {
    try (InputStream input = this.socket.getInputStream()) {
      try (OutputStream output = this.socket.getOutputStream()) {
        handler(input, output);
      }
    } catch (Exception e) {
      try {
        this.socket.close();
      } catch (IOException ioe) {
      }
      System.out.println("client disconnected.");
    }
  }

  public void handler(InputStream input, OutputStream output) throws IOException {
    var writer = new BufferedWriter(new OutputStreamWriter(output, StandardCharsets.UTF_8));
    var reader = new BufferedReader(new InputStreamReader(input, StandardCharsets.UTF_8));
    writer.write("Hello\n");
    writer.flush();

    for(;;) {
      String s = reader.readLine();
      System.out.println(s);
      if (s.equals("bye")) {
        writer.write("bye\n");
        writer.flush();
        break;
      }

      writer.write("ok:" + s + "\n");
      writer.flush();
    }

  }

}