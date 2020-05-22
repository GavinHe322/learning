const net = require('net');
var client = net.createConnection(233, () => {
    setInterval(() => {
        //一旦建立连接，则开始每500ms发送一次时间
        client.write(new Date().toLocaleString())
    }, 500)
})
client.on('data', (data) => {
    console.log(data.toString())
})