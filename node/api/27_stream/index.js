
// stream 是 node.js 中处理流式数据的抽象接口。
// stream 模块用于构建实现了流接口的对象
// http、process.stdout 都是流的实例

const stream = require('stream')

/**
 * 流的类型
 * writeble
 *  eg: fs.createWriteStream()
 * readble
 *  eg: fs.createReadStream()
 * Duplex
 *  eg: net.Socket
 * Transform
 *  eg: zlib.createDeflate()
 */

/**
 * 可写流的例子
 * 客户端的 http 请求
 * 服务器的 http 相应
 * fs 的写入流
 * zlib 流
 * crypto 流
 * TCP socket
 * 子进程 stdin
 * process.stdout、process.stderr
 */


/**
 * 双工流 与 转换流
 * stream.Duplex 类
 * 
 * TCP socket
 * zlib
 * crypto
 */
