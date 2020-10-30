// 9.3 JavaScript 中的命令模式

var log = console.log

/**
 * 疑问?
 * 给对象的某个方法取了 execute 的名字,引入 command 对象 和 receiver两个角色无非就是把简单的事情复杂化了,
 * 下列方法岂不是更好?
 */
var bindClick = function(button, func) {
  button.onclick = func
}

var MenuBar = {
  refresh: function() {
    log('刷新菜单界面')
  }
}

bindClick(button1, MenuBar)

// 上诉说法是正确的，9.2采用的是传统面向对象的实现方法

/**
 * 使用闭包
 */
 var  setCommand = function(button, command) {
   button.onclick = function() {
    command.execute()
   }
 }

var RefreshMenuBarCommand = function(receiver) {
  return {
     execute: function() {
       receiver.refresh()
     }
  }
}

var MenuBar = {
   refresh: function() {
     log('刷新菜单')
   }
 }

var refreshMenuBarCommand = RefreshMenuBarCommand(MenuBar)

setCommand(button1, refreshMenuBarCommand)
