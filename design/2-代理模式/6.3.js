// 6.3 虚拟代理实现图片懒加载

/**
 * 场景:
 * 由于直接给某个img设置src属性，网络不佳会长时间空白，使用一张 loading 图片占位，加载好了在填充到img节点中
 */


var myImage = (function() {
  var imgNode = document.createElement('img')
  document.body.appendChild(imgNode)
  return {
    setSrc: function(src) {
      imgNode.src = src
    }
  }
})()

/**
 * 未使用代理
 */
myImage.setSrc('http://xxx/public/xxx.png')

var proxyImage = (function() {
  var img = new Image()
  img.onload = function() {
    myImage.setSrc(this.src)
  }
  return {
    setSrc: function(src) {
      myImage.setSrc('file://xxxxx/loading.gif')
      img.src = src
    }
  }
})

/**
 * 使用代理
 * 一开始给 myImage 设置 loading 图片
 * 将 src 赋值为 img，在 onload 事件 在将加载好的图片赋值给 myImage
 */
proxyImage.setSrc('http://xxx/public/xxx.png')
