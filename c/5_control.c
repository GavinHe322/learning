
// 循环语句
// 用来遍历、枚举、循环的语句

// ----------------------------------------------------------------------------------------------------
// 1.for语句

/*
  for (表达式1; 表达式2; 表达式3) {
    语句
  }
*/

// 栗子
for(int i = 0; i < 10; i = i+1) {
  ;
}

// ----------------------------------------------------------------------------------------------------
// 2.while语句
/*
  while(表达式) {
    语句
    表达式
  }
*/

// ----------------------------------------------------------------------------------------------------
// 2.do while语句

do
{
  /* code */
} while (/* condition */);

// ----------------------------------------------------------------------------------------------------
// 3.break continue 语句
/*
  break 结束循环
  continue 结束当前循环，进行下一次循环
*/


// ----------------------------------------------------------------------------------------------------
// 4.goto 语句
// 使用 goto 语句会让代码变得难以理解和维护，应该避免使用，goto语句一般常用于跳出多循环体
/*
  for (...){
    for (...){
      if (...){
        goto cope;
      }
    }
  }
  ...
  cope:
  // 代码跳到这里继续往下执行
  ...
*/


// ----------------------------------------------------------------------------------------------------
// 5.判断语句
if (/* condition */)
{
  /* code */
}
else if (/* condition */)
{
  /* code */
}
else
{
  /* code */
}

// ----------------------------------------------------------------------------------------------------
// 6.switch语句
switch (expression)
{
case /* constant-expression */:
  /* code */
  break;

default:
  break;
}