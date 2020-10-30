// 9.2 命令模式的例子-菜单程序

/**
 * 样式 和 行为完全解耦
 * 
 * 将不变和变化的事物分离开来
 * 
 * 编写样式的程序员 不知道按钮将来用来干什么,
 */

var log = console.log

/**
 * 绘制样式
 */
var button1 = document.getElementById('button1')
var button2 = document.getElementById('button2')

/**
 * 负责安装命令
 */
var setCommand = function(button, command) {
  button.onclick = function() {
    command.execute()
  }
}

var MenuBar = {
  refresh: function() {
    log('刷新菜单目录')
  }
}

var SbuBar = {
  add: function() {
    log('增加子菜单')
  },
  del: function() {
    log('删除子菜单')
  }
}

var RefreshMenuBarCommand = function(receiver) {
  this.receiver = receiver
}

RefreshMenuBarCommand.prototype.execute = function() {
  this.receiver.refresh()
}

var AddSubMenuCommand = function(receiver) {
  this.receiver = receiver
}

AddSubMenuCommand.prototype.execute = function() {
  this.receiver.add()
}

var DelSubMenuCommand = function(receiver) {
  this.receiver = receiver
}

DelSubMenuCommand.prototype.execute = function() {
  log('删除子菜单')
}

var refreshMenuBarCommand = new RefreshMenuBarCommand(MenuBar)

setCommand(button1, refreshMenuBarCommand)
