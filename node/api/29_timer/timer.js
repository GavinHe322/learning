// 计时器指定可以执行所提供的回调的阈值，
// 而不是人们希望其执行的确切事件。

// 轮询阶段控制计时器的执行时间

const fs = require('fs')

function someAsyncOperation(callback) {
  // assume this takes 95ms to complete
  fs.readFile('/txt.txt', callback)
}

const timeoutScheduled = Date.now()

setTimeout(() =>{
  const delay = Date.now() - timeoutScheduled
  console.log(`${delay}ms have passed since i was scheduled`)
}, 100)

// do someAsyncOperation which takes 95 ms to complete
someAsyncOperation(() => {
  const startCallback = Date.now()
  while(Date.now() - startCallback < 1000) {
    console.log('doSomeThings')
  }
})
