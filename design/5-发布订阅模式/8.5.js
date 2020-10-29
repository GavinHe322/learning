// 8.5 发布-订阅模式的通用实现

var log = console.log

/**
 * 让传入的对象都拥有发布订阅功能
 * 单独抽取 发布-订阅功能
 */
var event = {
  clientList: [],
  listen: function(key, fn) {
    if (!this.clientList[key]) {
      this.clientList[key] = []
    }
    this.clientList[key].push(fn)
  },
  trigger: function() {
    var key = Array.prototype.shift.call(arguments)
    fns = this.clientList[key]

    if (!fns ||fns.length === 0) {
      return false
    }

    for (var i = 0, fn; fn = fns[i++];) {
      fn.apply(this, arguments)
    }
  }
}

var installEvent = function(obj) {
  for (var i in event) {
    obj[i] = event[i]
  }
}

var salesOffices = {}
installEvent(salesOffices)

salesOffices.listen('squareMeter88', function(price) {
  log('88平方米的房子价钱:', price)
})

salesOffices.trigger('squareMeter88', '100w')

log(salesOffices)
log(event, 'event')
