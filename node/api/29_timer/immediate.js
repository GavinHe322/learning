// setImmediate vs setTimeout

// 执行计时器的顺序将根据调用他们的上下文而异
// 如果运行以下不在 I/O 周期（即主模块）内的脚本，
// 则执行两个计时器的顺序是非确定性的，因为它受进程性能的约束：
// setTimeout(() => {
//   console.log('timeout')
// }, 0)

// setImmediate(() => {
//   console.log('immediate')
// })


// 如果放入一个 I/O 循环内调用， setImmediate 总是优先调用
const fs = require('fs')
fs.readFile('./txt.txt', () => {
  setTimeout(() => {
    console.log('timeout')
  }, 0)

  setImmediate(() => {
    console.log('immediate')
  })
})
