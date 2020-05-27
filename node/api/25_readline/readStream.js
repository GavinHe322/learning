// 1. 常规操作-----------------------------------------------------------
// const fs = require('fs')
// const readline = require('readline')

// async function processLineByLine() {
//   const fileStream = fs.createReadStream('input.txt')

//   const rl = readline.createInterface({
//     input: fileStream,
//     crlfDelay: Infinity
//   })

//   for await(const line of rl) {
//     console.log(`line from file： ${line}`)
//   }
// }
// processLineByLine()

// 2. line事件-----------------------------------------------------------
const fs = require('fs')
const readline = require('readline')
const rl = readline.createInterface({
  input: fs.createReadStream('input.txt'),
  crlfDelay: Infinity
})
rl.on('line', (line) => {
  console.log(`文件中的每一行: ${line}`)
})
