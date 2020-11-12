// 15.4 装饰函数

var log = console.log

/**
 * 很方便给对象拓展属性和方法
 * 很难在不改动某个函数源代码的情况下，给该函数添加一些额外的功能
 */

//  直接违反了 开放-封闭原则
var a = function() {
  log(1)
}

var a = function() {
  log(1)
  log(2)
}

var a = function() {
  log(1)
}


/**
 * 通过保存原引用的方式就可以改写某个函数
 * 业务中很常见
 * 符合开放-封闭原则
 * 
 * 问题
 * 必须维护多一个变量
 * 存在 this 被劫持问题
 */
var _a = a

a = function() {
  _a()
  log(2)
}

a()

window.onload = function() {
  log(1)
}

var _onload = window.onload || function() {}

window.onload = function() {
  _onload()
  log(2)
}


// this
var _getElementById = document.getElementById

document.getElementById = function(id) {
  log('id')
  // return _getElementById(id) // Uncaught TypeError: Illegal invocation
  return _getElementById.apply(document, arguments)
}
