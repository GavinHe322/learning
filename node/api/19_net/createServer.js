// 导入 net 模块
const net = require('net')

let options = {
  allowHalfOpen: false, // 表明是否允许半开 TCP 链接
  pauseConnect: false,  // 表明是否应在传入连接上暂停套接字
}
// 创建server
const server = net.createServer(options, (socket) => {
  socket.write('Hello')
  socket.on('data', (data) => {
    console.log(data.toString())
  })

  socket.on('error', (err) => {
    console.log('socket对象发生 error')
  })

  socket.on('close', () => {
    console.log('server.js socket close events..')
  })
})

server.listen(8000, () => {
  console.log('congrugulation server listening in 8000...')
})
