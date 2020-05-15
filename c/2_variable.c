
// 应避免变量名称重复

// 声明
int count;
// 定义
int count = 1;

// 整体结构
// 类型 变量名 = 初始值


// 变量类型

// 常用类型
/*
 * init  整数
 * float 浮点类型
 * char  字符
 */

// 类型限定符

/*
 *unsigned  正数或0(自然数)
 *signed    表示有符号的  +-
 *short 比int长度小
 *long  比int长度大 这两个可以在int前面，但我们通常不屑int 直接写short a; long b;
 */

// 隐式转换

int max() {
  // 局部变量是不会随着函数执行完消失的
  static int a = 1;
  a++;
  return a;
}

printf("%d", max()); // 2
printf("%d", max()); // 3

// 寄存器变量
// 无论寄存器变量是否储存在寄存器中，它的地址都无法访问！


// 全局变量

int max2(int a, int b);
int a = 1;

int main() {
  extern int b;
  max2(a, b);
}

int b = 2;

int max3(int a, int b) {
  return a > b ? a : b;
}