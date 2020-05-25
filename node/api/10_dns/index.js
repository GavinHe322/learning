// dns 模块用于启用名称解析。
// 例如，使用它查找主机名的ip地址

const dns = require('dns')

// dns.lookup('nihaoasb', (err, address, family) => {
//   if (err) {
//     return console.log(err, 'err')
//   }
//   console.log('地址: %j 地址族: IPv%s', address, family)
// })

// dns.lookup('baidu.com', (err, address, family) => {
//   console.log('baidu.com error', err)
//   console.log('地址: %j 地址族: IPv%s', address, family)
// })


dns.resolve4('archive.org', (err, addresses) =>{
  if (err) throw err

  console.log(`地址: ${JSON.stringify(addresses)}`)

  addresses.forEach((a) =>{
    dns.reverse(a, (err, hostnames) =>{
      if (err) throw err
      console.log(`地址${a} 逆向到: ${JSON.stringify(hostnames)}`)
    })
  })
})

