// 15.1 模拟传统面向对象语言的装饰者模式

var log = console.log

var Plane = function() {}

Plane.prototype.fire = function() {
  log('发射普通子弹')
}

// 两个装饰器
var MissileDecorator = function(plane) {
  this.plane = plane
}

MissileDecorator.prototype.fire = function() {
  this.plane.fire()
  log('发射导弹')
}

var AtomDecorator = function(plane) {
  this.plane = plane
}

AtomDecorator.prototype.fire = function() {
  this.plane.fire()
  log('发射导弹')
}

var plane = new Plane()
plane = new MissileDecorator(plane)
plane = new AtomDecorator(plane)

plane.fire()
