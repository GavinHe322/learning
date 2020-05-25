const dgram = require('dgram')

const server = dgram.createSocket('udp4')

server.on('error', (err) => {
  console.log(`服务器异常: \n ${err.stack}`)
  server.close()
})

server.on('message', (msg, rinfo) => {
  console.log(msg.toString(), 'message')
  console.log(`服务器收到来自 ${rinfo.address}: ${rinfo.port}`)
})

server.on('listening', () => {
  const address = server.address()
  console.log(address.msg, 'listening')
  console.log(`服务器监听${address.address}: ${address.port}`)
})

server.bind(41234)
