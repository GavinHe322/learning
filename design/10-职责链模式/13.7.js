// 13.7 用 AOP 实现职责链
/**
 * Aspect Oriented Programming(AOP) 面向切面编程
 * 
 * 
 * 
 * AOP是针对业务处理过程中的切面进行提取，
 * 它所面对的是处理过程中的某个步骤或阶段，
 * 以获得逻辑过程中各部分之间低耦合性的隔离效果
 */

var log = console.log

Function.prototype.after = function(fn) {
  var self = this

  return function() {
    var ret = self.apply(this, arguments)
    if (ret === 'nextSuccessor') {
      return fn.apply(this, arguments)
    }

    return ret
  }
}

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

var order = order500.after(order200).after(orderNormal)

order(1, true, 500)
order(2, true, 500)
order(3, true, 500)
order(1, false, 500)
