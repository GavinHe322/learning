const ejs = require('ejs')
const readFileSync = require('fs').readFileSync
const join = require('path').join
const path = join(__dirname, '/functions.ejs')

const data = {
  users: [
    { name: 'Tob', age: 2, species: 'Tob species' },
    { name: 'Loki', age: 2, species: 'Loki species' },
    { name: 'Jane', age: 6, species: 'Jane species' }
  ]
}

var ret = ejs.compile(readFileSync(path, 'utf8'))(data)

console.log(ret)
