const zlib = require('zlib')
const http = require('http')
const fs = require('fs')
const { pipeline } = require('stream')

const request = http.get({ host: '127.0.0.1',
                           path: '/',
                           port: 8000,
                           headers: { 'Accept-Encoding': 'br,gzip,deflate' } })
request.on('response', (response) => {
  const output = fs.createWriteStream('index_client.html')

  const onError = (err) => {
    if (err) {
      console.error('发生错误:', err)
      process.exitCode = 1
    }
  }

  switch (response.headers['content-encoding']) {
    case 'br':
      pipeline(response, zlib.createBrotliDecompress(), output, onError)
      break
    // 或者, 只是使用 zlib.createUnzip() 方法去处理这两种情况：
    case 'gzip':
      pipeline(response, zlib.createGunzip(), output, onError)
      break
    case 'deflate':
      pipeline(response, zlib.createInflate(), output, onError)
      break
    default:
      pipeline(response, output, onError)
      break
  }
})