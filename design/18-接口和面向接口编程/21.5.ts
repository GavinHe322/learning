interface Command {
  execute: Function
}

const log: Function = console.log

class RefreshMenuBarCommand implements Command {
  constructor() {}
  execute() {
    log('刷新菜单界面')
  }
}

class AddSubMenuCommand implements Command {
  constructor() {}
  execute() {
    log('添加子菜单')
  }
}

var refreshMenuBarCommand: RefreshMenuBarCommand = new RefreshMenuBarCommand()
refreshMenuBarCommand.execute()

var addSubMenuCommand: AddSubMenuCommand = new AddSubMenuCommand()
addSubMenuCommand.execute()
