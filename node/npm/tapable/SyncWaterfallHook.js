const { SyncWaterfallHook } = require('tapable')
const log = console.log

class Car {
  constructor() {
    this.hooks = {
      calc: new SyncWaterfallHook(['a'])
    }
  }

  run() {
    this.hooks.calc.call(...arguments)
  }
}

const car = new Car()

car.hooks.calc.tap('APlugin', (a) => a + 1)
car.hooks.calc.tap('BPlugin', (b) => b + 1)
car.hooks.calc.tap('CPlugin', (c) => log(c + 1)) // 3

car.run(0)
