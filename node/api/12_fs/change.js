const fs = require('fs')
const path = require('path')


fs.watch('../12_fs', { encoding: 'utf-8' }, (eventType, filename) => {
  if (filename) {
    console.log(filename)
  }
})
