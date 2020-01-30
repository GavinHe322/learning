// 变量和变量


main() {
  // 1. var
  //   自定推导变量的类型
  //   注意： Flutter 开发一般经常使用 var, 
  //   以便可以自动推导变量的类型

  int colorValur = 0xff000000;
  var colorKey = 'black'; // 自动根据赋值的类型，推导为 String 类型
  // 使用 var 声明集合变量
  var colorList = ['red', 'green', 'skyblue'];
  var colorSet = {'red', 'yellow', 'blue', 'green'};
  var colorMap = {'widte': 0xffffffff, 'black': 0xff000000};
  
  // 声明值未赋值，type 为 dynamic, 所以后续的 tpye 是可以修改的
  var color;
  color = 'red';      // string
  color = 0xff000000; // int
  // 声明时赋值，type 被推导为当前类型，所以后续 type 不可变
  var colorValue = 'red';
  // colorValue = 0xff000000; // error
  print(colorValue is int);   // true

  // 2. 常数 final const
  // 区别：如果常量是编译期就能初始化的就用 const
  const PI = 3.141592653589793;   // 
  final nowTime = DateTime.now(); // final 定义常量
}