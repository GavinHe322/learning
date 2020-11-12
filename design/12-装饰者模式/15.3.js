// 15.3 回到JavaScript的装饰器

var log = console.log

/**
 * JavaScript 语言动态改变对象相当容易，可以不直接改写对象的某个方法，并不需要使用 "类" 来实现装饰器模式
 */
var plane = {
  fire: function() {
    log('发射普通子弹')
  }
}

var missileDecorator = function() {
  log('发射导弹')
}

var atomDecorator = function() {
  log('发射原子弹')
}

var fire1 = plane.fire

plane.fire = function() {
  fire1()
  missileDecorator()
}

var fire2 = plane.fire

plane.fire = function() {
  fire2()
  atomDecorator()
}

plane.fire()

