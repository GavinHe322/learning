public class Interface {
  public static void main(String[] args) {
    Student s = new Student("Gavin");
    s.run();
    System.out.println(s.getName());
  }
}

interface Person {
  void run();
}

interface Hello extends Person {
  String getName();
}

class Student implements Hello {
  private String name;
  public Student(String name) {
    this.name = name;
  }
  
  @Override
  public void run() {
    System.out.println(this.name + "run");
  }

  @Override
  public String getName() {
    return this.name;
  }
}