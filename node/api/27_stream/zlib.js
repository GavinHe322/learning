const { pipeline } = require('stream')
const fs = require('fs')
const zlib = require('zlib')

// 使用pipeline API 轻松将一系列的流通过管道一起传送
// 并在管道完全地完成时获得通知。

pipeline(
  fs.createReadStream('archive.tar'),
  zlib.createGzip(),
  fs.createWriteStream('archive.tar.gz'),
  (err) => {
    if (err) {
      return console.error('管道传送失败', err)
    }
    console.log('success')
  }
)
