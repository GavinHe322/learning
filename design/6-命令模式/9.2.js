// 9.2 命令模式的例子-菜单程序

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

