const {
  AsyncParallelBailHook
} = require('tapable')
const log = console.log

class Car {
  constructor() {
    this.hooks = {
      asyncParallelBailHook: new AsyncParallelBailHook()
    }
  }

  asyncParallelBailHook(callback) {
    this.hooks.asyncParallelBailHook.callAsync(callback)
  }
}

const car = new Car()

function random() {
  return parseInt(Math.random() * 5)
}

// asyncParallelBailHook
car.hooks.asyncParallelBailHook.tapAsync('APlugin', (callback) => {
  setTimeout(() => {
    callback('A')
  }, random())
})

car.hooks.asyncParallelBailHook.tapAsync('BPlugin', (callback) => {
  setTimeout(() => {
    log('B')
    callback('B')
  }, random())
})

car.asyncParallelBailHook((result) => {
  console.log(result, 'result?') // 输出最快的
})
