// crypto 模块提供了加密功能，
// 包括对 OpenSSL 的哈希、HMAC、加密、解密、签名、以及验证功能的一整套封装。

// Hmac 算法是一种哈希算法，它可以利用MD5或SHA1等哈希算法。不同的是，Hmac还需要一个密钥
const crypto = require('crypto')

const hmac = crypto.createHmac('sha256', 'secret-key')

hmac.update('Hello, world!')
hmac.update('Hello, nodejs')

// 只要密钥发生了变化，那么同样的输入数据也会得到不同的签名，
// 因此，可以把Hmac理解为用随机数“增强”的哈希算法。
console.log(hmac.digest('hex'))


