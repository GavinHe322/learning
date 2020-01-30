// 万物皆对象
// Number Boolean Function 都继承于 Object, 
// 所以他们的默认值都是 null.
/**
 * bool
 * num
 * int
 * double
 * String
 * List
 * Set
 * Map
 * Runes
 * Symbols
 */

main() {
  // 1.布尔类型
  bool isClosep = true;
  bool isOpend = false;
  print(isClosep);

  // 2.数字类型
  double pi = 3.141592653;
  // int width = 200;
  // int height = 300;
  // print(width / height);  // 两个 int 类型相除是 double 类型小数, 而不是整除后的整数.
  // print(width ~/ height); // 注意：这才是 dart 整除的姿势;

  // 数字常用函数
  print(3.1415926.toStringAsFixed(3)); // toFixed
  print(6.6.floor());                  // Math.floor()
  print((-6.6).ceil());                // -6 Math.ceil()
  print(9.9.ceil());                   // 10 Math.ceil()
  print((-555).abs());                 // 555 Math.abs()
  print(666.6.toInt());                // parseInt()
  print(999.isOdd);                    // is 基数
  print(999.isEven);                   // is 偶数  
  print(666.6.toString());             // .toString()

  // 3. 字符串 string
  String name = 'Hello Dart!';    // 单引号
  String title = "'Hello Dart!'"; // 双引号
  String description = """
    Hello Dart!
    Hello Dart!
  """;
  print(description);
  num value = 2;
  String result = 'The result is $value'; // 单值引用;
  num width = 200;
  num height = 300;
  String square = "Teh square is ${width * height}"; // 类似模板字符串

  // 常用 string api
  String url = "https://mrale.ph/dartvm/";

  print(url.split('://'));     // split => return []
  print(url.substring(3, 9));  // similar js
  print(url.codeUnitAt(0));    // String.charCodeAt(index);
  print(url.startsWith('https'));   // 以什么开头
  print(url.endsWith('/'));         // 以什么结尾
  print(url.toUpperCase());         // 大写
  print(url.toLowerCase());         // 小写
  print(url.indexOf('http'));       // 0
  print(url.contains('http'));      // String.includes()
  print(url.trim());                // similar js
  print(url.length);                // String.length
  print(url.replaceFirst('t', 'A'));  // 替换第一个 t => A
  print(url.replaceAll('m', 'M'));    // 提权全部 m => M

  // 4. 类型检查 is 和 is!  强制转换 as
  int number = 100;
  double distance = 200.5;
  num age = 18;
  print(number is num);    // true
  print(distance is! int); // true
  print(age as int);       // 18

  
  // 5. Runes 和 Symbols
  var clapping = '\u{1f44f}';
  print(clapping);
  print(clapping.codeUnits);      // 返回 16 位的字符串单元数组;
  print(clapping.runes.toList());

  Runes input = new Runes(
    '\u2665  \u{1f605}  \u{1f60e}  \u{1f47b}  \u{1f596}  \u{1f44d}'
  );
  print(new String.fromCharCodes(input)); // 强 全是表情

  // 6. Object
  Object color = 'black';
  color = 0xff000000; // 运行正常， 0xff000000 类型是 int, int 继承于 Object

  // 7. dynamic (var 声明，未赋值就是 dynamic 类型);
  dynamic block = 'block';
  block = 0xff000000; // 运行正常，0xff000000 类型是 int, int 继承与 Object
}
