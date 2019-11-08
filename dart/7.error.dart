main() {
  // 直接捕捉错误
  int num = 18;
  int result = 0;
  try {
    result = num ~/ 0;
  } catch (e) { // 捕获到 IntegerDivisionByZeroException
    print(e.toString());
  }  finally {
    print('${result}');
  }


  // 使用 on 关键字捕获特定的异常.
  int num1 = 18;
  int result1 = 0;
  try {
    result1 = num1 ~/ 0;
  } on IntegerDivisionByZeroException catch (e) { // 捕获特定异常
    print(e.toString());
  } finally {
    print('${result1}');
  }
}