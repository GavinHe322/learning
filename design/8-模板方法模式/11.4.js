// 11.4 模板方法模式的使用场景

var log = console.log

/**
 * 模板方法模式常被架构师用于搭建项目
 * 架构师定好了架构的骨架，程序员继承框架的结构之后，复制往里面填空
 */

// 11.5 钩子方法
/**
 * 钩子方法是隔离变化的一种常用手段
 */
var Beverage = function() {}

Beverage.prototype.boilWater = function() {
  log('把水煮沸')
}

Beverage.prototype.brew = function() {
  throw new Error('子类必须重写 brew 方法')
}

Beverage.prototype.pourInCup = function() {
  throw new Error('子类必须重写 pourInCup 方法')
}

Beverage.prototype.addCondiments = function() {
  throw new Error('子类必须重写 addCondiments 方法')
}

Beverage.prototype.customerWantsCondiments = function() {
  return true // 默认需要调味料
}

Beverage.prototype.init = function() {
  this.boilWater()
  this.brew()
  this.pourInCup()
  if (this.customerWantsCondiments()) {
    this.addCondiments()
  }
}

var CoffeeWithHook = function() {}

CoffeeWithHook.prototype = new Beverage()

CoffeeWithHook.prototype.brew = function() {
  log('用沸水冲泡咖啡')
}

CoffeeWithHook.prototype.pourInCup = function() {
  log('把咖啡倒进杯子')
}

CoffeeWithHook.prototype.addCondiments = function() {
  log('加糖和牛奶')
}

// hook
CoffeeWithHook.prototype.customerWantsCondiments = async function() {
  return false // 不调味料
}

var coffeeWithHook = new CoffeeWithHook()

coffeeWithHook.init()
