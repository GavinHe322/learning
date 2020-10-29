// 8.7 真实的例子-网站登录
var event = require('./8.5')
var log = console.log
/**
 * 场景
 * 网站有 header nav 消息列表 购物车等
 * 前提
 * 必须获取用户信息，才更新这些模块
 */

// 待重构代码
// login.succ(function(data) {
//   header.setAvatar(data.avatar)
//   nav.setAvatar(data.avatar)
//   message.refresh()
//   cart.refresh()
// })

// 改造
// $.ajax('http://xxx', function(data) {
  // 发布登录成功的信息
  // login.trigger('loginSucc', data)
// })

var login = {}
event.installEvent(login)

var header = (function() {
  login.listen('loginSucc', function(data) {
    header.setAvatar(data)
  })

  return {
    setAvatar: function(data) {
      log('header设置头像', data)
    }
  }
})()

var nav = (function() {
  login.listen('loginSucc', function(data) {
    nav.setAvatar(data)
  })

  return {
    setAvatar: function(data) {
      log('nav设置头像', data)
    }
  }
})()

login.trigger('loginSucc', '头像')
