// 4.1 实现单例模式
/**
 * 缺点
 * 1、意义不大
 * 2、不透明性
 */
var Singleton = function(name) {
  this.name = name
}

Singleton.prototype.getName = function() {
  console.log(this.name)
}

Singleton.getInstance = function(name) {
  if (!this.instance) {
    this.instance = new Singleton(name)
  }
  return this.instance
}

var a = Singleton.getInstance('sven1')
var b = Singleton.getInstance('sven2')
console.log(a === b) // true
