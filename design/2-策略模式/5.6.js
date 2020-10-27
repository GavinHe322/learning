// 5.6 表单验证

/**
 * 5.5 小知识点
 * 定时器执行最小时间为19ms
 */

const { log, warn, error } = console

/**
 * 5.6.1 第一个版本
 * 缺点
 * 1.函数庞大，包含了很多 if-else 语句，这些语句需要覆盖所有校验
 * 2.缺乏弹性，修改校验方式需要深入修改该函数
 * 3.复用性差，多个 submit 表单，会导致校验逻辑复制的漫天遍野
 */
// var registerForm = document.getElementById('registerForm')
// registerForm.onsubmit = function() {
//   if (registerForm.userName.value === '') {
//     return error('请输入用户名称')
//   }
//   if (registerForm.password.value === '') {
//     return error('请输入用户密码')
//   }
//   // request
// }

/**
 * 5.6.2 策略模式重构表单校验
 * 不足一点: 单个输入框只能对应一种校验规则
 * 只需改写 add 逻辑就好，将 rule 改为 rules 循环 push 到 cache
 */
var strategies = {
  isNonEmpty: function(value, errorMsg) {
    if (value === '') {
      return errorMsg
    }
  },
  minLength: function(value, length, errorMsg) {
    if (value.length < length) {
      return errorMsg
    }
  },
  isMobile: function(value, errorMsg) {
    if (!/(^1[3|5|8][0-9]{9}$)/.test(value)) {
      return errorMsg
    }
  }
}

var Validator = function() {
  this.cache = [] // 保存验证规则
}
Validator.prototype.add = function(dom, rule, errorMsg) {
  var ary = rule.split(':') // 把 strategy 和参数分开
  this.cache.push(function() {
    var strategy = ary.shift() // 用户挑选的 strategy
    ary.unshift(dom.value) // 把 input 的 value 添加进参数列表
    ary.push(errorMsg)
    return strategies[strategy].apply(dom, ary)
  })
}

Validator.prototype.start = function() {
  for (var i = 0, validatorFunc; validatorFunc = this.cache[i++];) {
    var errorMsg = validatorFunc() // 开始验证，并取得验证后的返回信息
    if (errorMsg) {
      return errorMsg
    }
  }
}

var validataFunc = function() {
  var validator = new Validator()

  validator.add(registerForm.userName, 'isNonEmpty', '用户名不能为空')
  validator.add(registerForm.password, 'minLength:6', '密码长度不能少于6位')
  validator.add(registerForm.phone, 'isMobile', '手机格式错误')
  var  errorMsg = validator.start()
  return errorMsg
}

var registerForm = document.getElementById('registerForm')
registerForm.onsubmit = function() {
  var errorMsg = validataFunc()
  if (errorMsg) {
    alert(errorMsg)
    return false
  }
}
