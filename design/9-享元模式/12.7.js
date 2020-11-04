// 12.7 对象池

// 12.7 对象池

/**
 * 假设对象池维护一个装载空闲对象的池子，
 * 如果需要对象的时候，不是直接new，而是从中获取。
 * 如果对象池没有空闲对象，则创建一个新的对象
 */

// 12.7.1 对象池的实现

var toolTipFactory = (function(){
  var toolTipPool = []

  return {
    create: function() {
      if (toolTipPool.length === 0) {
        var div = document.createElement('div')
        document.body.appendChild(div)
        return div
      } else {
        return toolTipPool.shift()
      }
    },
    recover: function(toolTipDom) {
      return toolTipPool.push(toolTipDom)
    }
  }
})()

var ary = []

for (var i = 0, str; str = ['a', 'b', 'c'][i++];) {
  var toolTip = toolTipFactory.create()
  toolTip.innerHTML = str
  ary.push(toolTip)
}

for (var i = 0, toolTip; toolTip = ary[i++];) {
  toolTipFactory.recover(toolTip)
}

// 修改对象池的第一div对象
toolTipFactory.create().innerHTML = 'A'


// 12.7.2 通用对象池实现
var objectPoolFactory = function(createObjFn) {
  var objectPool = []

  return {
    create: function() {
      console.log(objectPool, '??')
      var obj = objectPool.length === 0 ?
        createObjFn.apply(this, arguments) :
        objectPool.shift()
      return obj
    },
    recover: function(obj) {
      objectPool.push(obj)
    }
  }
}

var iframeFactory = objectPoolFactory(function() {
  var iframe = document.createElement('iframe')
  document.body.appendChild(iframe)

  iframe.onload = function() {
    iframe.onload = null
    iframeFactory.recover(iframe)
  }

  return iframe
})

var ifream1 = iframeFactory.create()
ifream1.src = 'http://baidu.com'

var iframe2 = iframeFactory.create()
iframe2.src = 'http://qq.com'

setTimeout(() => {
  // 这里就使用的缓存池iframe
  var iframe3 = iframeFactory.create()
  iframe3.src = 'http://163.com'
}, 5000)


/**
 * 12.8 小结
 * 
 * 享元模式是为解决性能问题而生的模式，这跟大部分模式的诞生原因都不一样
 */
