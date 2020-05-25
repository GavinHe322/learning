const crypto = require('crypto')

/**
 * md5 
 * 👇
 * sha1
 * sha256
 * sha512
 */

const hash = crypto.createHash('md5')

hash.update('Hello, world!')
hash.update('Hello, nodejs!')


console.log(
  hash.digest('hex'), // 7e1977739c748beac0c0fd14fd26a544
)

