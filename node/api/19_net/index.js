// net 模块用于创建基于流的 TCP 或 IPC 的服务器 (net.createServer())
// 于客户端(net.createConnection())

const net = require('net')

const server = net.createServer((socket) => {
  socket.end('再见\n')
}).on('error', (err) => {
  throw err
})

server.listen(() => {
  console.log('打开服务器', server.address())
})
