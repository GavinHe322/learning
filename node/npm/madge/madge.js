const madge = require('madge')

madge('./index.js').then((res) => {
  console.log(res)
  console.log(res.obj(), 'obj')
  console.log(res.warnings(), 'warnings')
  console.log(res.circular(), 'circular')
  console.log(res.circularGraph(), 'graph')
  console.log(res.depends(), 'depends')
})
