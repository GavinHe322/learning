// 11.7 真的需要 继承 吗

var log = console.log

// 在好莱坞原则的指导之下，下面这段代码可以达到和继承一样的效果

var Beverage = function(param) {
  var boilWater = function() {
    log('把水煮沸')
  }

  var brew = param.brew || function() {
    throw new Error('必须传递brew方法')
  }

  var pourInCup = param.pourInCup || function() {
    log('必须传递 pourInCup 方法')
  }

  var addCondiments = param.addCondiments || function() {
    throw new Error('必须传递 addCondiments 方法')
  }

  var F = function() {}

  F.prototype.init = function() {
    boilWater()
    brew()
    brew()
    pourInCup()
    addCondiments()
  }

  return F
}

var Tea = Beverage({
  brew: function() {
    log('用沸水浸泡茶叶')
  },
  pourInCup: function() {
    log('把茶倒进杯子')
  },
  addCondiments: function() {
    log('加柠檬')
  }
})

var tea = new Tea()
tea.init()


/**
 * 小结
 * 很多时候不需要使用模板方法模式，高阶函数是更好的选择
 */
