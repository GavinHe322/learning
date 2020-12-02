const { SyncBailHook } = require('tapable')
const log = console.log

class Car {
  constructor() {
    this.hooks = {
      brake: new SyncBailHook()
    }
  }

  run() {
    this.hooks.brake.call()
  }
}

const car = new Car()

car.hooks.brake.tap('APlugin', () => log('A'))
car.hooks.brake.tap('BPlugin', () => undefined) // 不执行
car.hooks.brake.tap('CPlugin', () => log('C'))

car.run()
