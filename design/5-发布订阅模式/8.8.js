// 8.8 全局的发布-订阅对象

var log = console.log

/**
 * 8.5 的 event 函数
 * 缺点
 * 给每个发布者对象都添加了 listen 和  trigger 方法，以及缓存列表，这其实时一种浪费
 * 存在一定的耦合性 如下代码(需要像多个售楼处订阅消息)
 */
// A 售楼处
// salesOfficesA.listen('squareMetter100', fn)
// B 售楼处
// salesOfficesB.listen('squareMetter100', fn)

/**
 * 现实中我们只需要提供一次信息给中介，售楼处通过中介来获取信息，来给我们发送消息
 * 去掉了 installEvent 逻辑
 */
var Event = (function() {
  var clientList = {},
      listen,
      trigger,
      remove
  
  listen = function(key, fn) {
    if (!clientList[key]) {
      clientList[key] = []
    }
    clientList[key].push(fn)
  }

  trigger = function() {
    var key = Array.prototype.shift.call(arguments)
    fns = clientList[key]
    if (!fns || fns.length === 0) {
      return false
    }
    for (var i = 0, fn; fn = clientList[i++];) {
      fn.apply(this, arguments)
    }
  }

  remove = function(key, fn) {
    var fns = clientList[key]
    if (!fns) {
      return false
    }

    if (!fn) {
      fns && (fns.length = 0)
    } else {
      for (var l = fns.length - 1; l >= 0; l--) {
        var _fn = fns[l]
        if (_fn === fn) {
          fns.splice(l, 1)
        }
      }
    }
  }

  return {
    listen,
    trigger,
    remove
  }
})()

Event.listen('squareMetter88', function(price) {
  log('88平方米的价钱:', price)
})

Event.trigger('squareMetter88', '200w')
