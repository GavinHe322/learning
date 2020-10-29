// 8.9 模块间通信

/**
 * 上一个 发布-订阅 的实现时，是基于一个全局的 Event 对象。
 * 就如同有了中介公司，我们不再需要知道放字开售的消息来自哪个售楼处
 * 
 * 如果模块之间用了太多的全局发布-订阅模式来通信，那么模块于模块的练习就被隐藏到了背后。
 * 我们最终会搞不清消息来自哪个模块，或者消息流向哪些模块
 */

var a = (function() {
  var count = 0
  var button = document.getElementById('count')
  button.onclick = function() {
    Event.trigger('add', count)
  }
})()

var b = (function() {
  var div = document.getElementById('show')
  Event.listen('add', function(count) {
    div.innerHTML = count
  })
})()
