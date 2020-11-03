// 10.4 更强大的宏命令

var log = console.log

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

var openAcCommand = {
  execute: function() {
    log('打开空调')
  }
}

var openTvCommand = {
  execute: function() {
    log('打开电视')
  }
}

var macroCommand = MacroCommand()

macroCommand.add(openAcCommand)
macroCommand.add(openTvCommand)

macroCommand.execute()

