const fs = require('fs')
const path = require('path')

async function print(fillPath) {
  const dir = await fs.promises.opendir(fillPath)

  console.log(dir, 'dir')

  for await (const dirent of dir) {
    console.log(dirent.name)
  }
}

// print('../').catch(console.error)

console.log('1')
fs.opendir(path.resolve(__dirname, '..'), async (err, res) => {
  if (err) throw err
  for await(const dirent of res) {
    console.log(dirent.name, 'dir?? sync')
  }
})
console.log('2')
