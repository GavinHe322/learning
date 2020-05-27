const readline = require('readline')

const values = ['lorem ipsum', 'dolor sit amet']
const rl = readline.createInterface(process.stdin)

const showResults = () => {
  console.log(
    '\n',
    values.filter((val) => val.startsWith(rl.line)).join(' ')
  )
}

process.stdin.on('keypress', (c, k) => {
  showResults()
})