// 6.6 虚拟代理合并HTTP请求

/**
 * 选中的 checkbox 向后端发送文件请求
 * 缺点: 开销很大
 */
var synchronousFile = function(id) {
  console.log('开始同步文件 id:' + id)
}

var checkbox = document.getElementsByTagName('input')
for (var i = 0, c; c = checkbox[i++];) {
  c.onclick = function() {
    if (this.checked === true) {
      synchronousFile(this.id)
    }
  }
}

/**
 * 在实时性要求不强的情况下
 * 将点击的 checkbox 缓存起来，定时发送
 */
var proxySynchronousFile = (function() {
  var cache = [],
      timer
  return function(id) {
    cache.push(id)

    if (timer) {
      return
    }

    timer = setTimeout(function() {
      synchronousFile(cache.join(','))
      clearTimeout(timer)
      timer = null
      cache.length = 0
    }, 2000)
  }
})()

/**
 * 代理和实体相一致
 * 调用只需将 synchronousFile 改为 proxySynchronousFile 即可
 */
var checkbox = document.getElementsByTagName('input')
for (var i = 0, c; c = checkbox[i++];) {
  c.onclick = function() {
    if (this.checked === true) {
      proxySynchronousFile(this.id)
    }
  }
}