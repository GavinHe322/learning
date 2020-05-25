
// 所有的文件操作系统都具有异步和同步操作

const fs = require('fs')
// 同步
var data = fs.readFileSync('./txt.txt', 'utf8')
console.log(data, 'sync')

// 异步
fs.readFile('./txt.txt', (err, data) => {
  if (err) throw err
  console.log('async', data.toString())
})

var dirent = new fs.Dirent('./txt.txt')
console.log(
  dirent.isFile()
)

fs.watchFile('./txt.txt', (err, data) => {
  console.log(err, data.toString())
})