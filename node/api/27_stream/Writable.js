const { Writable } = require('stream')
const { StringDecoder } = require('string_decoder')

class StringWritable extends Writable {
  constructor(options) {
    super(options)
    console.log(options, 'options')
    this._decoder = new StringDecoder(options && options.defaultEncoding)
    this.data = ''
  }
  _write(chunk, encoding, callback) {
    if (encoding === 'buffer') {
      chunk = this._decoder.write(chunk)
    }
    this.data += chunk
    callback()
  }

  _final(callback) {
    this.data += this._decoder.end()
    callback()
  }
}


const euro = [[0xE2, 0x82], [0xAC]].map(Buffer.from)

const w = new StringWritable()

w.write('货币:')
w.write(euro[0])
w.end(euro[1])

console.log(w.data)
