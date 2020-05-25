const { Resolver } = require('dns')

const resolver = new Resolver()
resolver.setServers(['4.4.4.4'])

// 请求讲使用 4.4.4.4 中的服务器，与全局设置无关
resolver.resolve4('example.org', (err, addresses) =>{
  console.log(err, addresses)
})
