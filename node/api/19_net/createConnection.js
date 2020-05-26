const net = require('net')

let socket = net.createConnection(8000, '127.0.0.1', () => {
  console.log('client.js 成功链接服务器')
})

socket.on('data', (data) => {
  console.log(data.toString())
  socket.write('client.js in socket.data.write')
})


socket.on('error', (err) => {
  console.log('client.js on error')
})