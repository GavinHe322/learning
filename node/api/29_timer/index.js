// 事件循环
// 使Node.js 可以通过将操作转移到系统内核中来执行非
// 阻塞I/O操作 (:尽管JavaScript是单线程的


/**
 * timers
 * pending callbacks
 * idle, prepare                       incoming
 * poll  <---------- connection    |   data, etc.
 * check
 * close callbacks
 */ 

// 每个框架被称为时间循环的 "阶段"
// 每个阶段都有一个要执行的回调FIFO队列
// 当队列已完成或达到回调限制时，时间循环将移至下一个阶段，以此类推


// 阶段介绍

/**
 * 计时器
 *   此阶段由 setTimeout() 和安排的回调 setInterval()
 * 待处理的回调
 *   执行推迟到下一个循环迭代的I/O回调
 * 空闲，准备
 *    仅在内部使用
 * 轮询
 *    检索新的I/O事件；
 *    执行与I/O相关的回调(除了关闭回调，计时器安排的回调)
 *    适当时，节点将在此处阻塞。
 * check
 *    setImmediate() 在这里调用回调
 * 关闭回调
 *    一些关闭回调，例如 socket.on('close')
 */
// 在每个事件循环运行之间，Node.js 会检查它是否正在等待一步I/O或计时器，
// 如果没有，则将其干净的关闭


console.log('script start')

setTimeout(() => {
  console.log('setTimeout1')
  Promise.resolve().then(() => {
    console.log('setTimeout1 promise1')
  })
}, 16)

async function async1() {
  await async2()
  console.log('async1')
}

async function async2() {
  console.log('async2')
  return Promise.resolve(1).then(() => {
    console.log('async2 then1')
  })
}

async1()

new Promise((resolve) => {
  console.log('Promise1')
  resolve()
}).then(() => {
  console.log('Promise1 then1')
}).then(() => {
  console.log('Promise1 then2')
})

console.log('script end')

/**
 * script start
 * async2
 * Promise1
 * script end
 * async2 then1
 * Promise1 then1
 * Promise1 then2
 * async1
 * setTimeout1
 * setTimeout1 promise1
 */
