main() {
  Function square = (int a) {
    return a * a;
  };

  print(square(2));

  Function square2 = (a) {
    return a * a * a;
  };

  print(add(3, 4, square, square2));
}

num add(num a, num b, [Function op, Function op2]) {
  // 函数作为参数传递
  return op(a) + op2(b);
}
