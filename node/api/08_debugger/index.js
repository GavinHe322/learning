global.x = 5
// 使用 node inspect index.js

/**
 * cont, c 继续执行
 * next, n 单步执行下一行
 * step, s 单步进入
 * out , o 单步退出
 * pause   暂停运行中的代码 (类似于开发者工具中的暂停按钮)
 */
setTimeout(() => {
  debugger
  var a = fn()
  console.log('世界')
}, 1000)

console.log('Niaho')

function fn () {
  var a = 1
  return a
}