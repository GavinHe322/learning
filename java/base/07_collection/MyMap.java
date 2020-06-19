import java.util.HashMap;
import java.util.Map;

public class MyMap {
  public static void main(String[] args) {
    Student s = new Student("xiaoming", 18);
    Map<String, Student> map = new HashMap<>();
    map.put("xiaoming", s);

    Student target = map.get("xiaoming");
    System.out.println(target == s);

    Map<String, Integer> map2 = new HashMap<>();
    map2.put("a", 1);
    map2.put("b", 2);
    map2.put("c", 3);

    // keySet()
    for (String key: map2.keySet()) {
      Integer value = map2.get(key);
      System.out.println(key + " = " + value);
    }

    // entrySet()
    for (Map.Entry<String, Integer> entry: map2.entrySet()) {
      String key = entry.getKey();
      Integer value = entry.getValue();
      System.out.println(key + " : " + value);
    }

    
  }
}

class Student {
  public String name;
  public int score;

  public Student(String name, int score) {
    this.name = name;
    this.score = score;
  }
}