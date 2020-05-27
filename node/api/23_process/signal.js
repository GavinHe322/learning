process.stdin.resume()

process.on('SIGINT', () => {
  console.log('接收到 SIGINT。 按 Control-D 退出。')
})

// 使用单独的函数处理多个信号。
function handle(signal) {
  console.log(`接收到 ${signal}`)
}

process.on('SIGINT', handle)
process.on('SIGTERM', handle)