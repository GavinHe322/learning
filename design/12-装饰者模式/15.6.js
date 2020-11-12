// 15.6 AOP 的应用实例

/**
 * AOP 装饰函数的技巧在实际开发中非常有用。
 * 无论是业务代码的编写，还是框架层面，都可以把行为依照职责分成颗粒度更细的函数
 * 随后通过装饰把他们合并到一起，这有助于我们编写一个松耦合和高复用性的系统
 */

// 15.6.1 数据统计上报

// 功能和上报耦合在一起
// var showLogin = function() {
//   log('打开登录浮层')
//   log('span')
// }

// var log = function() {
//   console.log('上报标签为:', this)
// }

// document.getElementById('button').onclick = showLogin


// // 使用 AOP 重新编写
// Function.prototype.after = function(afterFn) {
//   var _self = this
//   return function() {
//     var ret = _self.apply(this, arguments)
//     afterFn.apply(this, arguments)
//     return ret
//   }
// }

// var showLogin = function() {
//   console.log('打开登录浮层')
// }

// var log = function() {
//   console.log('上报标签为:', this)
// }

// showLogin = showLogin.after(log)

// document.getElementById('button').onclick = showLogin


// 15.6.2 用 AOP 动态改变函数的参数
Function.prototype.before = function(beforeFn) {
  var _self = this
  return function() {
    beforeFn.apply(this, arguments)
    return _self.apply(this, arguments)
  }
}

var func = function(params) {
  console.log(params) // {a: 'a', b: 'b'}
}

func = func.before(function(params) {
  params.b = 'b'
})

func({a: 'a'})


// 现在有一个用于发起ajax请求的函数，这个函数负责项目中所有的ajax异步请求
/**
 * 使用AOP的方式增加token验证
 * 保证了ajax函数的一个相对纯净的函数，提高了ajax函数的可复用性
 */
var ajax = function(type, url, params) {
  console.dir(params)
}

ajax('get', 'http://xxx.com/usrinfo', {name: 'gavin'})

ajax = ajax.before(function(type, url, params) {
  params.Token = 'token'
})

ajax('get', 'http://xxx.cm/userinfo', {name: 'gavin'})

// 15.6.3 插件式的表单验证

// 待修改表单
var form = {
  userName: '',
  password: ''
}

var formSubmit = function() {
  if (form.userName === '') {
    return console.log('用户名不能为空')
  }
  if (form.password === '') {
    return console.log('password is require')
  }

  ajax('post', 'http://xxx/api', form)
}

formSubmit()


// 使用AOP
var form = {
  userName: '1',
  password: ''
}

var validate = function() {
  console.log('validate')
  if (form.userName === '') {
    console.log('用户名不能为空 AOP')
    return false
  }
  if (form.password === '1') {
    console.log('password is require AOP')
    return false
  }
}

var formSubmit = function() {
  console.log('submit AOP')
  ajax('post', 'http://xxx/api', form)
}

formSubmit = formSubmit.before(validate)

formSubmit()
