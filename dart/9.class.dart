
class Person {
    String name;
    int age;
    double height;

    Person(String name, int age, double height) {
      this.name = name;
      this.age = age;
      this.height = height;
    }
}

class Student extends Person {//和Java一样同时使用extends关键字表示继承
    Student(String name, int age, double height, double grade): super(name, age, height);//在 Dart里：类名(变量，变量,...) 是构造函数的写法, :super()表示该构造调用父类，这里构造时传入三个参数
}


main() {
  var parent = Person('parent', 10, 20.22);
  print(parent.name);

  var child = Student('child', 10, 20.22, 222);
  print(child.name);
}