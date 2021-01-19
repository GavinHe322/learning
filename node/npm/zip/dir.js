
const JSZip = require('jszip')
const fs = require('fs')
const chalk = require('chalk')

var zip = new JSZip()


zip.file('file.txt', 'nihaoya')

zip
  .folder('sub')
  .file('file.txt', 'content')


zip.generateAsync({
  type: 'nodebuffer'
})
.then((content) => {
  fs.writeFileSync(
    'dir.zip',
    content,
    'utf-8'
  )

  console.log(chalk.green('压缩文件成功'))
})
