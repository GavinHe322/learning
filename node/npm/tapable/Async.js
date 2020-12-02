const {
  AsyncParallelBailHook,
  AsyncParallelHook,
  AsyncSeriesHook,
  AsyncSeriesBailHook
} = require('tapable')
const log = console.log

class Car {
  constructor() {
    this.hooks = {
      asyncParallelBailHook: new AsyncParallelBailHook(),
      asyncParallelHook: new AsyncParallelHook(),
      asyncSeriesHook: new AsyncSeriesHook(),
      asyncSeriesBailHook: new AsyncSeriesBailHook()
    }
  }

  asyncParallelBailHook(callback) {
    this.hooks.asyncParallelBailHook.callAsync(callback)
  }

  asyncParallelHook(callback) {
    this.hooks.asyncParallelHook.callAsync(callback)
  }

  asyncSeriesHook(callback) {
    this.hooks.asyncSeriesHook.callAsync(callback)
  }

  asyncSeriesBailHook(callback) {
    this.hooks.asyncSeriesBailHook.callAsync(callback)
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

// car.asyncParallelBailHook((result) => {
//   console.log(result, 'result?') // 输出最快的
// })

// asyncParallelHook
car.hooks.asyncParallelHook.tapAsync('CPlugin', (callback) => {
  setTimeout(() => {
    callback('C')
  }, random())
})
car.hooks.asyncParallelHook.tapAsync('DPlugin', (callback) => {
  setTimeout(() => {
    callback('D')
  }, random())
})

// car.asyncParallelHook((result) => {
//   console.log(result, '???')
// })

// AsyncSeriesHook
car.hooks.asyncSeriesHook.tapPromise('EPlugin', (callback) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      log('E')
      resolve('E')
    }, random())
  })
  
})

car.hooks.asyncSeriesHook.tapPromise('FPlugin', (callback) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      log('F')
      resolve('F')
    }, random())
  })
})

// car.asyncSeriesHook((result) => {
//   console.log(result, '?')
// })

// asyncSeriesBailHook
car.hooks.asyncSeriesBailHook.tapPromise('GPlugin', (callback) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      log('G')
      resolve('G')
    }, random())
  })
})

car.hooks.asyncSeriesBailHook.tapPromise('HPlugin', (callback) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      log('H')
      resolve('H')
    }, random())
  })
})

car.asyncSeriesBailHook((result) => {
  log(result, '??')
})
