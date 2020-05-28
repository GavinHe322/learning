const util = require('util')

// callbackify
async function fn() {
  return 'hello world'
}
const callbackFunction = util.callbackify(fn)
callbackFunction((err, ret) => {
  if (err) throw err
  util.log(ret)
})


// format
util.log(
  util.format('%s:%s', 'foo', 'bar', 'baz'),
  util.format(1, 2, 3)
)

// inspect
const o = {
  a: [1, 2, [[
    'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem',
    '===lorem2 lorem lorem lorem lorem2'
  ]], 4],
  b: new Map([['za', 1], ['zb', 'test']])
}
console.log(
  util.inspect(o, {
    compact: true,
    depth: 5,
    breakLength: 80,
    colors: true
  })
)

// colors
util.inspect.styles.date = 'blue'
util.inspect.styles.string = 'red'
util.inspect.styles.number = 'yellow'
console.log(util.inspect('nihao',{colors: true}))
console.log(util.inspect(new Date(),{colors: true}))
console.log(util.inspect(Date.now(),{colors: true}))
