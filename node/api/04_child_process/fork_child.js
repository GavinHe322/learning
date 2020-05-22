console.log('child')
process.on('message', (message, server) => {
  if(message == 'server') {
      server.on('connection', (socket) => {
          socket.on('data', (data) => {
              //向父进程发送客户端的消息
              process.send(data.toString())
              socket.write('子进程处理了你的消息')
          })
      })
  }
})