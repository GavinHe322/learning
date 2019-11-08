
// 五、流程控制

main() {
  // 1. for
  List<String> colorList = ['red', 'yellow', 'blue', 'green'];
  for (var i = 0; i < colorList.length; i++) {
    print('for ${colorList[i]}');
  }

  // 2.while
  var index = 0;
  while(colorList.length > index) {
    print('while ${colorList[index++]}');
  }

  // 3.do-while
  index = 0;
  do {
    print('do-while ${colorList[index++]}');
  } while (index < colorList.length);

  // 4. break && continue
  for (int i = 0; i < colorList.length; i++) {
    if (colorList[i] == 'yellow') {
      print('continue');
      continue;
    }
    if (colorList[i] == 'blue') {
      print('break');
      break;
    } else {
      // 5. if-else
      print(colorList[i]);
    }
  }

  // 5. 三木运算符 ? :
  var a = 2 > 1 ?  true : false;
  print(a);  // true


  // 6. witch-case
  var num = 60;
  switch (num) {
    case 60:
      print('low');
      break;
    default:
      print('good');
  };

  // 8. Assert 断言  (没明白)
  // var text = null;
  // var urlString = 'https://';
  // assert(text != null);//text为null,就会中断后续代码执行
  // assert(urlString.startsWith('https'));
  // print('break');
}
