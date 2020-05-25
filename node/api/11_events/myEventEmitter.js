class MyEmitter {
  constructor() {
    this.events = {}
  }
  addEventListener(key, callback) {
    if (!this.events[key]) {
      this.events[key] = []
    }
    this.events[key].push(callback)
  }

  on(key, callback) {
    this.addEventListener(key, callback)
  }

  off(key, callback) {
    if (!this.events[key]) {
      return
    }
    this.events[key] = this.events[key].filter(item => item !== callback)
  }

  emit(key, ...args) {
    this.events[key].forEach((callback) => {
      Reflect.apply(callback, this, args)
    })
  }

  once(key, callback) {
    this.on(key, this._once(key, callback, this))
  }

  _once(key, callback, target) {
    const state = {
      first: false,
      key,
      callback,
      target
    }
    const _onceHandler = this._onceHandler.bind(state)
    state._onceHandler = _onceHandler
    return _onceHandler
  }

  _onceHandler(...args) {
    if (!this.first) {
      this.first = true
      Reflect.apply(this.callback, this.target, args)
      this.target.off(this.key, this._onceHandler)
    }
  }
}

var myEmitter = new MyEmitter()

let clickHandle = (a) => {
  console.log('click handler', a)
}
myEmitter.on('click', clickHandle)

myEmitter.emit('click', 'event click')
myEmitter.off('click', clickHandle)
myEmitter.emit('click', 'event click')

// once
let addHandle = () => {
  console.log('handle add')
}
myEmitter.once('add', addHandle)
myEmitter.emit('add')
myEmitter.once('add', addHandle)
