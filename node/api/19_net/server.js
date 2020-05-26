const net = require('net')

let server = net.Server({
  hostname: '127.0.0.1',
  port: 8000
})

server.on('connection', (socket) => {
  socket.write('nihao')

  socket.on('data', (data) => {
    console.log(data.toString(), 'socket.on.data')
  })
})

server.listen({
  port: 8000,
  hostname: '127.0.0.1'
}, () => {
  console.log('server.js listenning in 8000 port')
})