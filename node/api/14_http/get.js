const http = require('http')

var options = {
  hostname: 'localhost',
  port: 8000
}

var req = http.request(options)

req.on("response", (res) => {

  res.setEncoding("utf-8")
  res.on("data",function(data){
    console.log(data.toString())
  })
  console.log(res.statusCode)
})

req.on("error",function(err){
  console.log(err.message)
})

req.end()