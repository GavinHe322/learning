
// 双工流最重要的方面是，
// 可读端和可写端相互独立于彼此地共存在同一个对象实例中。

const { Duplex } = require('stream')
const kSource = Symbol('source')

class MyDuplex extends Duplex {
  constructor(source, opt) {
    super(opt)
    this[kSource] = source
  }

  _write(chunk, encoding, callback) {
    // 底层资源只处理字符串
    if (Buffer.isBuffer(chunk)) {
      chunk = chunk.toString()
    }
    this[kSource].writeSomeData(chunk)
    callback()
  }

  _read(size) {
    this[kSource].fetchSomeData(size, (data, encoding) => {
      this.push(Buffer.from(data, encoding))
    })
  }
}

var chunk = Buffer.from([1], 'ascii')
var myDuplex = new MyDuplex()
console.log(
  myDuplex.write(chunk)
)

console.log(
  myDuplex.read(1)
)
