// ASE 是一种常见的对称加密算法，加解密都用同一个密钥。
// crypto模块提供了 ASE 支持，但是需要自己封装好函数，便于使用
const crypto = require('crypto')

function aesEncrypt(data, key) {
    const cipher = crypto.createCipher('aes192', key)
    var crypted = cipher.update(data, 'utf8', 'hex')
    crypted += cipher.final('hex')
    return crypted
}

function aesDecrypt(encrypted, key) {
    const decipher = crypto.createDecipher('aes192', key)
    var decrypted = decipher.update(encrypted, 'hex', 'utf8')
    decrypted += decipher.final('utf8')
    return decrypted
}

var data = 'Hello, this is a secret message!'
var key = 'Password!'
var encrypted = aesEncrypt(data, key)
var decrypted = aesDecrypt(encrypted, key)
/**
 * Plain text: Hello, this is a secret message!
 * Encrypted text: 8a944d97bdabc157a5b7a40cb180e713f901d2eb454220d6aaa1984831e17231f87799ef334e3825123658c80e0e5d0c
 * Decrypted text: Hello, this is a secret message!
 */
console.log('Plain text: ' + data)
console.log('Encrypted text: ' + encrypted)
console.log('Decrypted text: ' + decrypted)
