// 4.6 通用的惰性单例

/**
 * 4.5的 createLoginLayer 函数缺点
 * 违反单一职责原则，所有逻辑都在 createLoginLayer 内部实现；
 * 如果创建页面的其他唯一，则需要将函数照抄一遍
 * 
 * 将不变的部分隔离出来
 */

//  创建管理单例的逻辑
var getSingle = function(fn) {
  var result
  return function() {
    return result || (result = fn.apply(this, arguments))
  }
}

// 创建视图
var createLoginLayer = function() {
  var div = document.createElement('div')
  div.innerHTML = '我是登录浮窗'
  div.style.display = 'none'
  document.body.appendChild(div)
  return div
}

var createSingleLoginLayer = getSingle(createLoginLayer)

var createSingleIframe = getSingle(function() {
  var iframe = document.createElement('iframe')
  document.body.appendChild(iframe)
  return iframe
})

document.getElementById('loginBtn').onclick = function() {
  var loginLayer = createSingleIframe()
  loginLayer.src = 'http://baidu.com'
}


// 使用 jq
var bindEvent = function() {
  $('div').one('click', function() {
    console.log('click')
  })
}
// 使用 getSingle
// var bindEvent = getSingle(function() {
//   document.getElementById('div1').onclick = function() {
//     console.log('click')
//   }
//   return true
// })

var render = function() {
  console.log('开始渲染列表')
  bindEvent()
}

render()
render()