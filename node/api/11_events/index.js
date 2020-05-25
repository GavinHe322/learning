// 大多数 Node.js 核心 API 构建于管用的一步事件驱动架构
// 又称为触发器 emitter

const EventEmitter = require('events')

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter()

myEmitter.on('click', (a) => {
  console.log('触发事件', this, a, this === myEmitter)
})

myEmitter.emit('click', 1)

myEmitter.once('once', () => {
  console.log('once')
})

myEmitter.emit('once')
myEmitter.emit('once')
