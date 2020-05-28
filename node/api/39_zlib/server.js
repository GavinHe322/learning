// 服务端示例。
// 对每一个请求运行 gzip 操作的成本是十分高昂的。
// 缓存已压缩的 buffer 是更加高效的方式。
const zlib = require('zlib')
const http = require('http')
const fs = require('fs')
const { pipeline } = require('stream')

http.createServer((request, response) => {
  const raw = fs.createReadStream('index.html')
  // 存储资源的压缩版本和未压缩版本。
  response.setHeader('Vary', 'Accept-Encoding')
  let acceptEncoding = request.headers['accept-encoding']
  if (!acceptEncoding) {
    acceptEncoding = ''
  }

  const onError = (err) => {
    if (err) {
      // 如果发生错误，则我们将会无能为力，
      // 因为服务器已经发送了 200 响应码，
      // 并且已经向客户端发送了一些数据。 
      // 我们能做的最好就是立即终止响应并记录错误。
      response.end()
      console.error('发生错误:', err)
    }
  }

  // 注意：这不是一个合适的 accept-encoding 解析器。
  // 查阅 https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.3
  if (/\bdeflate\b/.test(acceptEncoding)) {
    response.writeHead(200, { 'Content-Encoding': 'deflate' })
    pipeline(raw, zlib.createDeflate(), response, onError)
  } else if (/\bgzip\b/.test(acceptEncoding)) {
    response.writeHead(200, { 'Content-Encoding': 'gzip' })
    pipeline(raw, zlib.createGzip(), response, onError)
  } else if (/\bbr\b/.test(acceptEncoding)) {
    response.writeHead(200, { 'Content-Encoding': 'br' })
    pipeline(raw, zlib.createBrotliCompress(), response, onError)
  } else {
    response.writeHead(200, {})
    pipeline(raw, response, onError)
  }
}).listen(8000)