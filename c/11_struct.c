// 简单声明
struct point
{
  int x;
  int y;
};

// 这里的 point 我们称之为 ```结构标记```，在结构体内的变量我们称之为 ```成员``` (member)
struct point
{
  int x;
  int y;
} diagram, chart;

// 此处的 diagram chart 就是结构体的```变量```，他们的类型是 struct point 类型。
// 既然如此我们也可以这样声明并定义
struct point diagram = {320, 210};
// 访问结构体变量的成员
// diagram.x;

struct point
{
  int x;
  int y;
} diagram = {123, 213};

int main(int argc, char const *argv[])
{
  printf("%d", diagram.x); // 123
  return 0;
}


struct race
{
  struct point p1;
  struct point p2;
} diagram = {{1, 3}, {4, 6}};

// main
printf("%d", diagram.p1.x); // 1

// 结构体指针
