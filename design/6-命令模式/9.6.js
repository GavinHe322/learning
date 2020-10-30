// 9.6 命令队列

var log = console.log

// 9.7 宏命令
/**
 * 一组命令的集合 称为宏命令
 */

var closeDoorCommand = {
  execute: function() {
    log('关门')
  }
}

var openPcCommand = {
  execute: function() {
    log('开电脑')
  }
}

var openQQCommand = {
  execute: function() {
    log('登录qq')
  }
}

var MacroCommand = function() {
  return {
    commandList: [],
    add: function(command) {
      this.commandList.push(command)
    },
    execute: function() {
      for (var i = 0, command; command = this.commandList[i++];) {
        command.execute()
      }
    }
  }
}

var macroCommand = MacroCommand()
macroCommand.add(closeDoorCommand)
macroCommand.add(openPcCommand)
macroCommand.add(openQQCommand)

macroCommand.execute()