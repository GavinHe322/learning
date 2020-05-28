
// string_decoder提供了一个APi，用一种能保护已编码的多字节
// UTF-8 和 UTF-16 字符的方式将 Buffer 对象解码为字符串。

const { StringDecoder } = require('string_decoder')

const decoder = new StringDecoder('utf8')

const cent = Buffer.from([0xC2, 0xA2])
console.log(decoder.write(cent))

const euro = Buffer.from([0xE2, 0x82, 0xAc])

console.log(decoder.write(euro))
