const http = require('http')

var keepAliveAgent = new http.Agent({
  keepAlive: true,
  keepAliveMsecs: 1000,
  maxSockets: Infinity,
  maxFreeSockets: 256,
  timeout: 6000
})

var server = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  })
  res.write('nihao')
  res.end()
})

server.listen(8000, (err) => {
  if (err) throw err
  console.log('congragulation')
})