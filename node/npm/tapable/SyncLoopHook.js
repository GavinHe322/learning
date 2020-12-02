const { SyncLoopHook } = require('tapable')

class Car {
  constructor() {
    this.hooks = {
      loop: new SyncLoopHook()
    }
  }

  run() {
    this.hooks.loop.call()
  }
}

const car = new Car()

let index = 0
car.hooks.loop.tap('APlugin', () => {
  console.log('启动')
  console.log(index)

  if (index < 5) {
    index++
    return 1
  }
})

car.run()

