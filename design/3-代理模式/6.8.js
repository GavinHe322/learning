// 6.8 缓存代理

/**
 * 为一些开销大的运算结果提供暂时的存储，如果传递进来的参数跟之前一致，
 * 则可以直接返回之前存储的运算结果
 */

const log = console.log

// 6.8.1 计算乘积

// 未使用缓存
var mult = function() {
  log('开始计算乘积')
  var a = 1
  for (var i = 0, l = arguments.length; i < l; i++) {
    a = a * arguments[i]
  }
  return a
}

log(mult(1, 2, 3))

// 使用缓存
var proxyMult = (function() {
  var cache = {}
  return function() {
    var args = Array.prototype.join.call(arguments, ',')
    if (args in cache) {
      log('缓存', args)
      return cache[args]
    }
    return cache[args] = mult.apply(this, arguments)
  }
})()

log(proxyMult(1, 2, 3))
log(proxyMult(1, 2, 3))
log(proxyMult(1, 2, 3, 4))
log(proxyMult(1, 2, 3, 4))
