const { Readable } = require('stream')

class Counter extends Readable {
  constructor(opt) {
    super(opt)
    this._max = 1000000
    this._index = 1
  }

  _read() {
    const i = this._index++
    if (i > this._max) {
      this.push(null)
    } else {
      const str = String(i)
      const buf = Buffer.from(str, 'ascii')
      this.push(buf)
    }
  }
}

var counter = new Counter()
console.log(
  counter.read().toString(),
  counter.read().toString(),
  counter.read().toString(),
  counter.read().toString(),
  counter.read().toString(),
  counter.read().toString(),
  counter.read().toString(),
  counter.read().toString(),
  counter.read().toString(),
  counter.read().toString()
)