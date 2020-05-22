const child_process = require('child_process');
const net = require('net');

var cp = child_process.fork(__dirname + '/fork_child.js')
var server = net.createServer(); //创建了一个socket服务器

server.on('connection', (socket) => {
    //一旦建立连接，客户端和服务器变成身份对称的socket
    socket.on('data', (data) => {
        //服务器端socket向客户端发送数据
        //注意不要用end，end会结束连接的
        socket.write('父进程处理了你的消息')
    })
})
server.listen(233, () => {
  console.log('listen')
    //将server传递给子进程，让它去处理
    cp.send('server', server);
})
cp.on('message', (message) => {
    console.log(message)
})