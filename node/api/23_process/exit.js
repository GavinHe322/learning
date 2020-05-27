const process = require('process')

// 监听器函数必须只执行同步操作
process.on('beforeExit', (code) => {
  console.log('进程 beforeExit 事件的代码: ', code)
})

process.on('exit', (code) => {
  console.log('进程 exit 事件的代码: ', code)
})

console.log('此消息最新显示')

setTimeout(() => {
  console.log('setTimeout1')
  process.exit(222)

  // 不执行
  setTimeout(() => {
    console.log('setTimeout2')
  }, 1000)
  
}, 1000)