function apiCall(arg, callback) {
  if (typeof arg !== 'string')
    return process.nextTick(callback,
                            new TypeError('argument should be string'));
}

// 我们正在做的是将错误传递回用户，但只有在我们允许
// 其余用户的代码执行之后。
// 通过使用 process.nextTick() 我们保证 apiCall() 始终
// 运行其回调后的用户代码的其余部分和之前的事件循环被允许继续前行

// 为了实现这一点，允许JS调用推展展开，然后立即执行所提供的回调，
// 该回调允许一个人进行递归调用而 process.nextTick() 不会达到 
// RangeError: Maxinum call stack size exceeded from v8


// 可能导致的潜在问题
let bar
// this has an asynchronous signature, but calls callback synchronously
function someAsyncApiCall(callback) {
  // callback()
  process.nextTick(callback)
}
someAsyncApiCall(() => {
  // since someAsyncApiCall hasn't completed, bar hasn't been assigned any value
  console.log('bar', bar)
})
bar = 1


/**
 * process.nextTick 与 setImmediate
 * 
 *   process.nextTick() 立即在同一阶段射击
 * 
 *   setTimeediate() 在事件循环的以下迭代或 "滴答" 中触发
 * 
 * 我们建议开发人员 setImmediate() 在所有情况下都使用它，因为这样更容易推理。
 */


// 为什么要使用process.nextTick()
/**
 * 1. 允许用户处理错误，清楚所有不必要的资源，或者在事件循环之前重新尝试请求
 * 
 * 2. 有时，有必要让回调栈解开之后 但事件循环继续之前的运行
 */
// eg:
// const net = require('net')
// const server = net.createServer();
// server.on('connection', (conn) => { });

// server.listen(8080);
// server.on('listening', () => { });


