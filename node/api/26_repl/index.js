
// repl 提供了一种 '读取-求值-输出' 循环(REPL)的实现，
// 它可作为一个独立的程序或嵌入到其他应用中。可以通过一下方式使用它

const repl = require('repl')

const replServer = repl.start({ prompt: '> ' })
replServer.defineCommand('sayhello', {
  help: '打招呼',
  action(name) {
    this.clearBufferedCommand()
    console.log(`你好, ${name}!`)
    this.displayPrompt()
  }
})

replServer.defineCommand('saybye', function saybye() {
  console.log('再见！')
  this.close()
})
