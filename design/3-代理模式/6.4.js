// 6.4 代理的意义

/**
 * 不使用代理的预加载图片函数
 * 该函数效果和代理实现一致
 */
var MyImage = (function() {
  var imgNode = document.createElement('img')
  document.body.appendChild(imgNode)
  var img = new Image
  img.onload = function() {
    imgNode.src = img.src
  }
  
  return {
    setSrc: function(src) {
      imgNode.src = 'file://xxxx/loading.gif'
      img.src = src
    }
  }
})()

/**
 * 单一职责原则
 * 指一个类(通常包括函数、对象等)，应该仅有一个引起它变化的原因
 * 如果一个对象承担了多项职责，就意味着这个对象将变得巨大，引起它变化的原因可能会有多个
 * 面对对象设计鼓励将行为分布到颗粒度的对象之中，如果一个对象承担的职责过多，这种耦合会导致脆弱和迪内聚的设计，当变化发生时，设计可能会遭到意外的破坏
 */