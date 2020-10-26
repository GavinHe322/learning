// 4.4 JavaScript 中的单例模式

const log = console.log

// 1. 使用命名空间
var namespace1 = {
  a: function() {
    log('a')    
  },
  b: function() {
    log('b')
  }
}

var MyApp = {}
MyApp.namespace = function(name) {
  var parts = name.split('.')
  var current = MyApp
  for (var i in parts) {
    var cur = parts[i]
    if (!current[cur]) {
      current[cur] = {}
    }
    /**
     * 原理: 使用对象的引用类型特质
     * [dom, style, bold]
     * 
     * if 没有 赋值 {}
     * idx -> dom
     * curent[dom] = {}
     * 将 dom 的地址赋值给 curent
     * curent = curent[dom]
     */
    current = current[cur]
  }
}
MyApp.namespace('event')
MyApp.namespace('dom.style')
MyApp.namespace('dom.style.bold')
log(MyApp)

// 2.使用闭包封装私有变量
var user = (function() {
  var _name = 'gavin', _age = 22

  return {
    getUserInfo: function() {
      return _name + '-' + _age
    }
  }
})
log(user().getUserInfo())
