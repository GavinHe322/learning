// 8.6 取消订阅的事件

var event = require('./8.5')
var log = console.log

event.event.remove = function(key, fn) {
  var fns = this.clientList[key]

  if (!fns) {
    return false
  }

  for (var i = fns.length - 1; i >= 0; i--) {
    var _fn = fns[i]
    if (_fn === fn) {
      fns.splice(i, 1)
    }
  }
}

var salesOffices = {}

event.installEvent(salesOffices)

var squareMetter88 = function(price) {
  log('88平方米的房子价钱:', price)
}

salesOffices.listen('squareMetter88', squareMetter88)

salesOffices.trigger('squareMetter88', '100w')
salesOffices.trigger('squareMetter88', '100w')

salesOffices.remove('squareMetter88', squareMetter88)
salesOffices.trigger('squareMetter88', '100w')
salesOffices.trigger('squareMetter88', '100w')
