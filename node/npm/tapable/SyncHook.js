const { SyncHook } = require('tapable')
const log = console.log

class Car {

  constructor() {
    this.hooks = {
      add: new SyncHook(['name', 'bbb'])
    }
  }

  run() {
    this.hooks.add.call(...arguments)
  }
}


const car = new Car()
car.hooks.add.tap('APlugins', (a, b, c) => log(a, b, c))
car.hooks.add.tap('BPlugins', (a, b, c) => log(a, b, c))
car.hooks.add.tap('CPlugins', (a, b, c) => log(a, b, c))

car.run('A', 'B', 'C')
