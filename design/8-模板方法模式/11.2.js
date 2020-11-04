// 11.2 第一个例子 - Coffee or Tea

var log = console.log

// 11.2.1 先泡一杯咖啡
/**
 * 1.把水煮沸
 * 2.用沸水冲泡咖啡
 * 3.把咖啡倒进杯子
 * 4.加糖和牛奶
 */
var Coffee = function() {}

Coffee.prototype.boilWater = function() {
  log('把水煮沸')
}

Coffee.prototype.brewCoffeeGriends = function() {
  log('用沸水冲泡咖啡')
}

Coffee.prototype.pourInCup = function() {
  log('把咖啡倒进杯子')
}

Coffee.prototype.addSugarAndMilk = function() {
  log('加糖和牛奶')
}

Coffee.prototype.init = function() {
  this.boilWater()
  this.brewCoffeeGriends()
  this.pourInCup()
  this.addSugarAndMilk()
}

var coffee = new Coffee()
coffee.init()

log('next-----------------------------split')

// 11.2.2 泡一壶茶

/**
 * 大致相同 不从写
 * 1.把水煮沸
 * 2.用沸水冲泡茶叶
 * 3.把茶水倒进杯子
 * 4.加柠檬
 */


//  11.2.3 分离共同点

/**
 * 整理后
 * 1.把水煮沸
 * 2.用沸水冲泡饮料
 * 3.把饮料倒进杯子
 * 4.加调料
 */

var Beverage = function() {}

Beverage.prototype.boilWater = function() {
  log('把水煮沸')
}

Beverage.prototype.brew = function() {} // 子类需重写

Beverage.prototype.pourInCup = function() {} // 子类需重写

Beverage.prototype.addCondiments = function() {} // 子类需重写

// init 被称为模板方法，该方法封装了子类的算法框架，
// 它作为一个算法的模板，知道子类以何种顺序去执行方法
Beverage.prototype.init = function() {
  this.boilWater()
  this.brew()
  this.pourInCup()
  this.addCondiments()
}

// 11.2.4 创建 Coffee 子类和 Tea 子类
var Coffee = function() {}

Coffee.prototype = new Beverage()

Coffee.prototype.brew = function() {
  log('用沸水冲泡咖啡')
}

Coffee.prototype.pourInCup = function() {
  log('把咖啡倒进杯子')
}

Coffee.prototype.addCondiments = function() {
  log('加糖和牛奶')
}

var coffee = new Coffee()
coffee.init()
