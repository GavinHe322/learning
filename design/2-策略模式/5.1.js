// 5.1 使用策略模式计算奖金

const log = console.log

/**
 * 1.最初的代码实现
 * 缺点
 * 函数随着逻辑而增大，一个函数需要覆盖所有分支
 * 缺乏弹性，增加逻辑时需要改写，违反开放-封闭原则
 * 复用性差
 * */

var calculateBonus = function(performanceLevel, salary) {
  if (performanceLevel === 'S') {
    return salary * 4
  }
  if (performanceLevel === 'A') {
    return salary * 3
  }
  if (performanceLevel === 'B') {
    return salary * 2
  }
}

log(calculateBonus('B', 2000)) // 4000
log(calculateBonus('A', 2000)) // 6000

/**
 * 2.使用组合函数重构代码
 * 得到一定改善，但非常有限，缺乏弹性
 */
var performanceS = function(salary) {
  return salary * 4
}

var performanceA = function(salary) {
  return salary * 3
}

var calculateBonus = function(performanceLevel, salary) {
  if (performanceLevel === 'S') {
    return performanceS(salary)
  }

  if (performanceLevel === 'A') {
    return performanceA(salary)
  }
}

log(calculateBonus('S', 2000)) // 8000
log(calculateBonus('A', 2000)) // 6000

/**
 * 3.使用策略模式重构代码
 * 将不变的部分和变化的部分隔开时每个设计模式的主题
 * 策略模式的目的就是讲算法的使用与算法的实现分离开来
 * 
 * 组成部分
 * 1.策略类-封装了具体的算法
 * 2.环境类Context，接收请求，然后委托给一个策略类
 */

 var performanceS = function(){}

 performanceS.prototype.calculate = function(salary) {
   return salary * 4
 }

 var performanceA = function(){}

 performanceA.prototype.calculate = function(salary) {
   return salary * 4
 }

var Bonus = function() {
  this.salary = null // 原始工资
  this.strategy = null // 绩效等级对应的策略对象
}

Bonus.prototype.setSalary = function(salary) {
  this.salary = salary
}

Bonus.prototype.setStrategy = function(strategy) {
  this.strategy = strategy
}

Bonus.prototype.getBonus = function() {
  if (!this.strategy) {
    throw new Error('未设置strategy属性')
  }
  return this.strategy.calculate(this.salary)
}

//  基于传统面向对象的模仿
var bonus = new Bonus()
bonus.setSalary(2000)
bonus.setStrategy(new performanceS())
log(bonus.getBonus()) // 8000
