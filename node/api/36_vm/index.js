
// vm 模块可在 V8 虚拟机上下文中编译和执行代码。
// vm 模块不是安全的机制，不要使用他来运行不受信任的diamagnetic

// JavaScript 代码可以立即编译执行，也可以编辑保存并稍后执行

const vm = require('vm')
const x = 1
const context = {
  x: 2
}
vm.createContext(context) // 上下文隔离化对象

const code = 'x += 40; var y = 17'

// `x` and `y` 是上下文中的全局变量
// 最初，x 的值为2，因为这是 context.x 的值
vm.runInContext(code, context)

console.log(context.x) // 42
console.log(context.y) // 17

console.log(x) // 1, y 没有定义