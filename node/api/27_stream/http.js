const http = require('http')

const server = http.createServer((req, res) => {
  // req 是一个 http.IncomingMessage 实例，它是可读流
  // res 是一个 http.ServerResponse 实例，他是可写流

  let body = ''
  // 接受数据为 utf8 字符串，
  // 如果没有设置字符编码，则会接受到 Buffer 对象
  req.setEncoding('utf8')

  req.on('data', (chunk) => {
    body += chunk
  })

  req.on('end', () => {
    try {
      const data = JSON.parse(body)

      res.write(typeof data)
      res.end()
    } catch (err) {
      res.statusCode = 400
      return res.end(`错误: ${err.message}`)
    }
  })
})

server.listen(8000)
