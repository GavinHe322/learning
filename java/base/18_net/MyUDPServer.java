import java.io.IOException;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.nio.charset.StandardCharsets;

public class MyUDPServer {
  public static void main(String[] args) throws IOException {
    DatagramSocket ds = new DatagramSocket(6666);

    byte[] buffer = new byte[1024];
    DatagramPacket packet = new DatagramPacket(buffer, buffer.length);

    ds.receive(packet);

    String s = new String(packet.getData(), packet.getOffset(), packet.getLength(), StandardCharsets.UTF_8);
    byte[] data = "ACK123".getBytes(StandardCharsets.UTF_8);
    packet.setData(data);

    ds.send(packet);
  }
}