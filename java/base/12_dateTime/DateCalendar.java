import java.util.*;
import java.text.*;

public class DateCalendar {
  public static void main(String[] args) {
    // 获取当前日期
    Date date = new Date();
    SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
    System.out.println(sdf.format(date));

    // 时间加减
    Calendar c = Calendar.getInstance();
    // 清除所有
    c.clear();
    // 设置年月日分秒
    c.set(2019, 10, 20, 8, 15, 0);
    c.add(Calendar.YEAR, 1);
    c.add(Calendar.MONTH, 1);
    // 显示时间
    Date d = c.getTime();
    System.out.println(sdf.format(d));
    
  }
}