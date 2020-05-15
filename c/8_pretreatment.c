// 预处理是指在编译程序之前做的处理，最常见的两个指令是 #include 和 #define

// 文件包括

// #include "#文件名"
// #include <文件名>


// 宏替换
#define forever while(1) /* 无限循环 */
#define MAX(x, y) ((x) > (y) ? (x) : (y))

#define dpint(msg) printf(#msg "\n")

int main(int argc, char const *argv[])
{
  dpint('abcbcbcbbcbcb');
  return 0;
}
