// 8.4 自定义事件

/**
 * 首先指定谁充当发布者(比如售楼部)
 * 然后给发布者添加一个缓存列表，用于存放回调函数以便通知订阅者(售楼处的花名册)
 * 最后发布消息的时候，发布者会遍历这个缓存列表，依次触发里面存放的订阅者回调函数
 */

var salesOffices = {} // 发布者

salesOffices.clientList = [] // 缓存列表

salesOffices.listen = function(fn) {
  this.clientList.push(fn)
}

salesOffices.trigger = function() {
  for (var i = 0, fn; fn = this.clientList[i++];) {
    fn.apply(this, arguments)
  }
}

/**
 * 简单实现订阅发布
 * 问题:
 * xxx 只想买 88 平方的放字，但是发布者把所有信息都推给了买房者
 */
salesOffices.listen(function(price, squareMeter) {
  console.log('价钱=' + price)
  console.log('suqreMeter=' + squareMeter)
})

salesOffices.trigger('2w', '1平方米')

// 重新实现
/**
 * 订阅者可以只订阅自己感兴趣的事件
 */
var salesOffices = {}

salesOffices.clientList = {}

salesOffices.listen = function(key, fn) {
  if (!this.clientList[key]) {
    this.clientList[key] = []
  }
  this.clientList[key].push(fn)
}

salesOffices.trigger = function() {
  var key = Array.prototype.shift.call(arguments)
  fns = this.clientList[key]
  if (!fns || fns.length === 0) {
    return false
  }

  for (var i = 0, fn; fn = fns[i++];) {
    fn.apply(this, arguments)
  }
}

salesOffices.listen('squareMeter88', function(price) {
  console.log('88平方米的价钱: ' + price)
})

salesOffices.listen('squareMeter100', function(price) {
  console.log('100平方米的价钱: ' + price)
})

salesOffices.trigger('squareMeter88', '100w')
salesOffices.trigger('squareMeter100', '150w')
