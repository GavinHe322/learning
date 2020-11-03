// 10.6 透明性带来额的安全问题

/**
 * 组合对象可以拥有子节点，也对象下面没有子节点，所以也许会发生一些误操作，比如试图往叶对象中添加子节点。
 */
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

var openTvCommand = {
  execute: function() {
    log('打开电视')
  },
  add: function() {
    throw new Error('也对象不能添加子节点')
  }
}

var macroCommand = MacroCommand()
macroCommand.add(openTvCommand) // that's right!
openTvCommand.add(macroCommand) // throw Error
