// 22.9 合理使用链式调用

/**
 * 链式调用
 * 痛点
 *   如果出现错误，必须将这条链拆开，才能调试
 * 优点
 *   方便
 * 
 * 如果结构相对稳定，后期不易发生修改，那么使用链式调用无可厚非。
 * 但如果该链条很容易发生变化，导致调试和维护困难，那么还是建议使用普通调用的形式。
 */

var User = function() {
  this.id = null
  this.name = null
}

User.prototype.setId = function(id) {
  this.id = id
  return this
}

User.prototype.setName = function(name) {
  this.name = name
  return this
}

const user = new User().setId(131).setName('gavin')
