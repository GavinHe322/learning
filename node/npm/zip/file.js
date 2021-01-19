/**
 * 打包普通文件
 */
const JSZip = require('jszip')
const fs = require('fs')
const chalk = require('chalk')
const path = require('path')

var zip = new JSZip()


zip.file('file.txt', 'content')

zip.generateAsync({
  type: 'nodebuffer',
  compression: 'DEFLATE',
  compressionOptions: {
    level: 9
  }
})
.then((content) => {
  fs.writeFileSync(
    'file1.zip',
    content,
    'utf-8'
  )
  console.log(chalk.green('压缩成功'))
})