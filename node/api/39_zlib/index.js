
// zlib 模块 Gzip、Deflate/Inflate、和 Brotli 实现的压缩功能。

// const { createGzip } = require('zlib')
// const { pipeline } = require('stream')

// const {
//   createReadStream,
//   createWriteStream
// } = require('fs')

// const gzip = createGzip()
// const source = createReadStream('input.txt')

// const destination = createWriteStream('input.txt.gz')

// pipeline(source, gzip, destination, (err) => {
//   if (err) {
//     console.error('发成错误', err)
//     process.exitCode = 0
//   }
// })


const { deflate, unzip } = require('zlib')

const input = '.................................'
deflate(input, (err, buffer) => {
  if (err) {
    console.error('发生错误:', err)
    process.exitCode = 1
  }
  console.log(buffer.toString('base64'))
})

const buffer = Buffer.from('eJzT0yMAAGTvBe8=', 'base64')
unzip(buffer, (err, buffer) => {
  if (err) {
    console.error('发生错误:', err)
    process.exitCode = 1
  }
  console.log(buffer.toString())
})
