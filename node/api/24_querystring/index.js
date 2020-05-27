const querystring = require('querystring')
const log = console.log

// decode && parse
log(
  querystring.parse('foo=bar&abc=xyz&abc=123'),
  querystring.decode('foo=bar&abc=xyz&abc=123')
)

// encode && stringify
log(
  querystring.encode({
    foo: 'bar',
    name: ['name1', 'name2'],
    corge: ''
  })
)
log(
  querystring.stringify({
    foo: 'bar',
    name: ['name1', 'name2'],
    corge: ''
  })
)