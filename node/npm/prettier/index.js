/**
 * @prettier
 */
const prettier = require('prettier')

prettier.format('foo ( );', { semi: false, parser: 'babel' })

var a = 1
var foo = {
  bar: 'This is a bar.',
  baz: { qux: 'This is a qux' },
  difficult: 'to read'
}

const arrowParents = (val) => val
