import java.time.*;

public class LocalDateTIme {
  public static void main(String[] args) {
    // LocalDateTime
    LocalDate d = LocalDate.now();
    LocalTime t = LocalTime.now();

    System.out.println(d);
    System.out.println(t);

    // 转换到当前时间日期
    LocalDateTime dt = LocalDateTime.now();
    LocalDate d1 = dt.toLocalDate();
    LocalTime t1 = dt.toLocalTime();
    System.out.println(d1);
    System.out.println(t1);
  }
}