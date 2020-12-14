const { createRequire } = require('module')
const path = require('path')

const a = createRequire(path.resolve(__dirname, 'package.json'))('./a') // { a: false }
const debug = createRequire(path.resolve(__dirname, 'package.json'))('debug')
const ms = createRequire(path.resolve(__dirname, 'package.json'))('ms')

console.log(a)
debug('bug')('???')
console.log(ms('2 days'))

// DEBUG=* node module.js
