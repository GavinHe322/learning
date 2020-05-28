// Assumes an echo server that is listening on port 8000.
const tls = require('tls')
const fs = require('fs')

const options = {
  // Necessary only if the server requires client certificate authentication.
  key: fs.readFileSync('./ryans-key.pem'),
  cert: fs.readFileSync('./ryans-cert.pem'),

  // Necessary only if the server uses a self-signed certificate.
  ca: [ fs.readFileSync('./ryans-cert.pem') ],

  // Necessary only if the server's cert isn't for "localhost".
  // checkServerIdentity: () => { return null },
}

const server = tls.createServer(options, (socket) => {
  console.log('server connected',
              socket.authorized ? 'authorized' : 'unauthorized')
  socket.write('welcome!\n')
  socket.setEncoding('utf8')
  socket.pipe(socket)
})
server.listen(8000, () => {
  console.log('server bound')
})
