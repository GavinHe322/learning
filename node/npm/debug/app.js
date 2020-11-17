var debug = require('debug')('http'),
    http = require('http'),
    name = 'my app'

debug('booting %o', name)

http.createServer((req, res) => {
  debug(req.method + ' ' + req.url)
  res.end('hello\n', )
}).listen(3000, () => {
  debug('listening')
})

require('./worker.js')
