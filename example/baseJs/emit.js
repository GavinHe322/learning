function EventEmitter() {
  this.events = new Map()
}

const wrapCallback = (fn, once = false) => ({ callback: fn, once})

EventEmitter.prototype.addListener = function (type, fn, once = false) {
  let handler = this.events.get(type)
  if (!handler) {
    this.events.set(type, wrapCallback(fn, once))
  } else if (handler && typeof handler.callback === 'function') {
    // 目前 type 时间只有一个回调
    this.events.set(type, [handler, wrapCallback(fn, once)])
  } else {
    handler.push(wrapCallback(fn, once))
  }
}

EventEmitter.prototype.removeListener = function (type, listener) {
  let handler = this.events.get(type)
  if (!handler) return
  if(!Array.isArray(handler)) {
    if (handler.callback === listener.callback) this.events.delete(type)
    else return
  }
  for (let i = 0; i < handler.length; i++) {
    let item = handler[i]
    if (item.callback === listener.callback) {
      handler.splice(i, 1)
      i--
      if (handler.length === 1) {
        this.events.set(type, handler[0])
      }
    }
  }
}

EventEmitter.prototype.once = function (type, fn) {
  this.addListener(type, fn, true)
}

EventEmitter.prototype.emit = function (type, ...args) {
  let handler = this.events.get(type)
  if (!handler) return
  if (Array.isArray(handler)) {
    // 遍历列表，执行回调
    handler.map(item => {
      item.callback.apply(this, args)
      if (item.once) this.removeListener(type, item)
    })
  } else {
    handler.callback.apply(this, args)
  }
  return 
}

EventEmitter.prototype.removeAllListener = function (type) {
  let handler = this.events.get(type)
  if (!handler) return
  else this.events.delete(type)
}

let e = new EventEmitter()

e.addListener('type', (a) => {
  console.log('type事件触发了 -> 传参 %s', a)
})

e.addListener('type', () => {
  console.log('WoW type事件又触发了! ')
})

function f() {
  console.log('我是type触发一次')
}

e.once('type', f)
e.emit('type', '参数aa')
e.emit('type')

e.removeAllListener('type')
e.emit('type')