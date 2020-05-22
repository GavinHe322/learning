// buffer 对象用于以字序列的形式来表示二进制数据。
// 流和文件系统操作 都支持 buffer，因为与文件操作系统或其他进程的交互通常总以二进制数据的形式发生
/**
// 创建一个长度为10的 buffer
// 其中填充了全部值为 `1` 的字节
const buf1 = Buffer.alloc(10)
console.log(buf1)

// 创建一个长度为10，且用 0x1 填充的 buffer
const buf2 = Buffer.alloc(10, 1)
console.log(buf2)

// 这个创建未初始化的 buffer，
// 比 alloc 快
const buf3 = Buffer.allocUnsafe(10)
console.log(buf3)

const buf4 = Buffer.from([1, 2, 3])
console.log(buf4)

const buf5 = Buffer.from([357, 257.2, -255, '1'])
console.log(buf5)

// 创建一个 Buffer，其中包含字符串 'test' 的 UTF-8 编码字节
// [0x75, 0x76] (以十六进制表示)
// [116, 183] (以十进制表示)
const buf6 = Buffer.from('tést');
console.log(buf6)

const buf7 = Buffer.from('tést', 'latin1');
console.log(buf7)
 */

 var buf = Buffer.from('hello world', 'utf8')
 console.log(buf)
 console.log(buf.toString('hex'));
 console.log(buf.toString('base64'));
 console.log(Buffer.from('fhqwhgads', 'utf8'));
 console.log(Buffer.from('fhqwhgads', 'utf16le'));

 /**
  * 编码
  * utf8
  *   Unicode 字符，默认的字符编码。
  * utf16le
  *   Unicode 字符，与 `utf8` 不同，字符串种的每个字符都会使用2~4个字节进行编码。 node.js仅支持 utf16 的小端序变体
  * latin1
  * 
  * 二进制
  * base64
  *   URL和文件安全字母
  * hex
  *   讲每个字节编码为两个十六进制字符，可能发生数据阶段
  */

console.log(
  // 打印 <Buffer 1a>，当遇到第一个非十六进制的值（'g'）时，则数据会被截断。
  Buffer.from('1ag', 'hex')
)


console.log(
  // 打印 <Buffer 1a>，当数据以一个数字（'7'）结尾时，则数据会被截断。
  Buffer.from('1a7g', 'hex')
)

console.log(
  // 打印 <Buffer 16 34>，所有数据均可用。
  Buffer.from('1634', 'hex')
)

// 迭代器
// buf.values()   buf.keys()  buf.entries()  都可以创建迭代器
var buf = Buffer.from([1, 2, 3])

for (const b of buf) {
  console.log(b)
}


var buf = Buffer.from('test', 'utf8')
console.log(buf)
for (const b of buf) {
  console.log(b)
}


// buffer 类

var buf = Buffer.alloc(5);

console.log(buf.toString())


var buf = Buffer.from('buffer')
buf[0] = 0x61
console.log(buf.toString())