// 4. 集合 List Set Map
main() {
  // 1. 集合 List
  // 可变集合 不可变集合? 什么意思，文档能不能说人话.
  List<String> colorList1 = ['red', 'yellow', 'blue', 'green']; 
  var colorList2 = <String>['red', 'yellow', 'blue', 'green'];

  // 常用函数
  List<String>colorList = ['red', 'yellow', 'green', 'pink'];
  colorList.add('white');     // python.List.add()
  print(colorList[3]);        // 数据结构
  print(colorList.length);    // Array.length
  colorList.insert(1, 'black');// 指定下标 插入元素
  print(colorList);           
  colorList.removeAt(2);      // 删除指定下标
  print(colorList);
  print(colorList.sublist(1, 3));  // 取 1 ~ 3 元素 return []
  print(colorList.getRange(1, 3)); // 获取集合中某个范围元素
  print(colorList.join('---'));    // Array.join()
  print(colorList.isEmpty);        // false
  print([].isEmpty);               // true
  print(colorList.contains('green')); // Array.includes()
  
  List<String>listColor = ['red', 'yellow', 'blue', 'green'];
  // for i
  for (var /**可以使用 var || int */ i = 0; i < listColor.length; i++) { 
    print(listColor[i]);
  }

  // forEach
  listColor.forEach((f) => print(f));

  // for in 
  for (var color in listColor) {
    print(color);
  }
  // while + interator 迭代器遍历
  //  while(listColor.iterator.moveNext()) {
  //       print(listColor.iterator.current);
  //  }

  // 2. 集合 Set
  // Set 数据结构，如果添加重复元素，会返回 false.
  Set<String> colorSet1 = {'red', 'yellow', 'green'}; // 直接使用 {} 初始
  var colorSet2 = <String>{'black', 'yellow', 'blue', 'green', 'white'};
  print(colorSet1.intersection(colorSet2)); // 交集 {'yellow', 'green'}
  print(colorSet1.union(colorSet2)); // 并集 {'red', 'black', 'yellow', 'blue', 'green', 'white'}
  print(colorSet1.difference(colorSet2)); //补集--->输出: {'red'}

  // set 遍历 和 List 一样

  // 3. 集合 Map
  Map<String, int> colorMap1 = {
     // 使用{key:value} 声明
    'whilte': 0xffffffff, 
    'black': 0xff000000
  };

  var colorMap2 = <String, int>{
    'white': 0xffffffff,
    'black': 0xff000000
  };

  print(colorMap1.containsKey('green'));    // false, Object.hasOwnProperty
  print(colorMap1.containsValue(0xff000000)); // true
  print(colorMap1.keys.toList());     // return keys => []
  print(colorMap1.values.toList());   // return values => []
  colorMap1['white'] = 0xffffff00;    // 修改指定 key
  colorMap1.remove('black');          // 移除 key [delete data.key]

  // 遍历 Map
  colorMap1.forEach((key, value) => print('color is $key, color value is $value'));
  
  // 将 list 转化为 Map
  List<String> colorKeys = ['white', 'black'];
  List<int> colorValues = [0xffffffff, 0xff000000];
  Map<String, int> colorMap3 = Map.fromIterables(colorKeys, colorValues);
  print(colorMap3); // 合并

  // 集合常用的操作符
  
}