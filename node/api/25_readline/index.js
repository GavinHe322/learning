
// readline 提供一个接口，用于一次一行的读取 ```可读流```
// 例如 process.stdin 中的数据。

const readline = require('readline')
const log = console.log

// tab 提示
function completer(line) {
  const completions = '.help .error .exit .quit .q'.split(' ');
  const hits = completions.filter((c) => c.startsWith(line));
  // 如果没有匹配，则显示所有补全。
  return [hits.length ? hits : completions, line];
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  completer
})

// <ctrl>-C SIGINT

rl.question('你如何看待 Node.js 中文网?', (answer) => {
  log(answer)
  rl.close()
})

rl.on('line', (input) => {
  log(`接收到: ${input}`)
})

rl.on('pause', () => {
  console.log('Readline 暂停')
})