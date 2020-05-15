int max(int a, int b);
int min(int, int);

int main () {
  max(1, 2);
  min(1, 2);
  return 0;
}

// 定义原型
int max(int a, int b) {
  return a > b ? a : b;
}

int min(int a, int b) {
  return a > b ? b : a;
}


// 递归
void printNum(int num) {
  if (num < 0) {
    putchar('-');
    num = -num;
  }

  // 判断到最高位 (最左边) 函数进栈
  if (num / 10) {
    printInt(num / 10);
  }
  putchar(num % 10 + '0');
}

int a = -42525;
printNum(a);
