// 18.1 设计模式中的原则

// 1.代理模式
// 图片预加载例子
var myImage = (function() {
    var imgNode = document.createElement('img')
    document.body.appendChild(imgNode)

    return {
      setSrc: function(src) {
        imgNode.src = src
      }
    }
})()

var proxyImage = (function() {
  var img = new Image
  img.onload = function() {
    myImage.setSrc(this.src)
  }

  return {
    setSrc: function(src) {
      myImage.setSrc('loading.gif')
      img.src = src
    }
  }
})()

proxyImage.setSrc('http://xxx/phtot/xxx.jpeg')

// 2.迭代器模式
/**
 * 这个例子要做两件事，遍历和添加视图
 * 两种方法耦合在一起了
 */
var appendDiv = function(data) {
  for (var i = 0, l = data.length; i < l; i++) {
    var div = document.createElement('div')
    div.innerHTML = data[i]
    document.body.appendChild(div)
  }
}

// 改写，将遍历抽出
var each = function(obj, callback) {
  var value,
      i = 0,
      length = obj.length,
      isArray = isArrayLike(obj); //
  
  if (isArray) {
    for (; i < length; i++) {
      callback.call(obj[i], i, obj[i])
    }
  } else {
    for (i in obj) {
      value = callback.call(obj[i], i, obj[i])
    }
  }
  return obj
}

var appendDiv = function(data) {
  each(data, function(i, n) {
    var div = document.createElement('div')
    div.innerHTML = n
    document.body.appendChild(div)
  })
}

appendDiv([1, 2, 3, 4, 5, 6])

// 3.单例模式
var getSingle = function(fn) {
  var result

  return function() {
    return result || (result = fn.apply(this, arguments))
  }
}

var createLoginLayer = function() {
  var div = document.createElement('div')
  div.innerHTML = '我是登陆浮窗'
  document.body.appendChild(div)
  return div
}

var createSingleLoginLayer = getSingle(createLoginLayer)

// 4.装饰器模式
Function.prototype.after = function(afterfn) {
  var _self = this

  return function() {
    var ret = _self.apply(this, arguments)
    afterfn.apply(this, arguments)
    return  ret
  }
}
