// 13.4 灵活可拆分的职责链节点

var log = console.log

/**
 * 改写三个节点函数，约定不能请求则返回一个特定字符串 'nextSuccessor' 表示往后传递
 */

var order500 = function(orderType, pay, stock) {
  if (orderType === 1 && pay === true) {
    log('500定金，100优惠')
  } else {
    return 'nextSuccessor'
  }
}

var order200 = function(orderType, pay, stock) {
  if (orderType === 2 && pay === true) {
    log('200定金，50优惠')
  } else {
    return 'nextSuccessor'
  }
}

var orderNormal = function(orderType, pay, stock) {
  if (stock > 0) {
    log('普通购买')
  } else {
    log('库存不足')
  }
}

// 编写职责链
var Chain = function(fn) {
  this.fn = fn
  this.successor = null
}

Chain.prototype.setNextSuccessor = function(successor) {
  return this.successor = successor
}

Chain.prototype.passRequest = function() {
  var ret = this.fn.apply(this, arguments)

  if (ret === 'nextSuccessor') {
    return this.successor && this.successor.passRequest.apply(this.successor, arguments)
  }

  return ret
}

var chainOrder500 = new Chain(order500)
var chainOrder200 = new Chain(order200)
var chainOrderNormal = new Chain(orderNormal)

chainOrder500.setNextSuccessor(chainOrder200)
chainOrder200.setNextSuccessor(chainOrderNormal)

chainOrder500.passRequest(1, true, 500)
chainOrder500.passRequest(2, true, 500)
chainOrder500.passRequest(3, false, 500)


// 假设增加需求 300定金
var order300 = function() {
  // ...
}

chainOrder300 = new Chain(order300)
// 只需改动链条即可
chainOrder500.setNextSuccessor(chainOrder300)
chainOrder300.setNextSuccessor(chainOrder200)
