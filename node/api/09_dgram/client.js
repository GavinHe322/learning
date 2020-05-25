const dgram = require('dgram')

// const message = Buffer.from('一些字节')
const message = [Buffer.from('一些'), Buffer.from('字节')]

const client = dgram.createSocket('udp4')

// client.send(message, 41234, 'localhost', (err) => {
//   client.close()
// })

// 使用已链接的 scoket 发送 UDP 包到 localhost 上的某个端口
client.connect(41234, 'localhost', (err) => {
  client.send(message, (err) => {
    client.close()
  })
})