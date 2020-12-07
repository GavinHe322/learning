var reg = ''
const log = console.log

// 用户名
reg = /^[a-z0-9_-]{3,16}$/
// log(reg.test('ab_3'))
// log(reg.test('ab_3#'))

// 反向否定
// ?<!
reg = /(?<!95|98|NT|2000)Windows/
// log(reg.test('2000Windows')) // false
// log(reg.test('1000Windows'))

// 正向肯定预查
// ?=
reg = /Windows(?=10|20|30)/i
// log(reg.test('Windows10'))
// log(reg.test('Windows400'))

reg = /^(10|20|30)Windows$/
// log(reg.test('10Windows'))
// log(reg.test('100Windows'))

// ^ 以什么开始 ^a
// $ 以什么结束 a$
// * 零次或多次 \s*
// + 一次多多次 a+
// ? 零次或多次 de(es)?
// {n}  n次
// {n,} 最少n次
// {n,m} 最少n次，最多m次
// . 除 \n 之外的任何单个字符，要匹配包括\n在内的任何字符，请使用像 (.|\n) 的模式
// x|y 匹配x或y
// [xyz] 匹配集合内的
// [^xyz] 匹配不在集合内的

// 简写
// \b 匹配单词边界
// \B 匹配非单词边界
// \d 匹配一个数字字符 =[0-9]
// \D 匹配一个非数字字符 =[^0-9]
// \f 换页符 \x0c \cL
// \n 换行符 \x0a \cj
// \r 回车符 \x0d \cM
// \s 任何空白字符 空格、制表符等。[\f\n\r\s\v]
// \S 匹配非空白字符 [^\f\n\r\s\v]
// \t 制表符 \x09 \cl
// \w 包括下划线的任何单词字符 [A-Za-z0-9_]
// \W 任何非包括下划线的单词字符 [^A-Za-z0-9]
