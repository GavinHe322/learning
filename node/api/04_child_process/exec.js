
const { exec } = require('child_process')

exec('node test.js', (error, stdout, stderr) => {
  console.log(error, stdout, stderr)
})

console.log('1')