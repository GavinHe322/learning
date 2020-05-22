const cluster = require('cluster')

if (cluster.isMaster) {
  const worker = cluster.fork();
  let timeout;

  worker.on('listening', (address) => {
    worker.send('shutdown');
    console.log('send shutdown')
    worker.disconnect();
    timeout = setTimeout(() => {
      worker.kill();
      console.log('worker.kill')
    }, 2000);
  });

  worker.on('disconnect', () => {
    console.log('disconnect')
    clearTimeout(timeout);
  });

} else if (cluster.isWorker) {
  const net = require('net');
  const server = net.createServer((socket) => {
    // 连接永远不会结束。
    console.log('链接永远不会')
  });

  server.listen(8000);

  process.on('message', (msg) => {
    if (msg === 'shutdown') {
      // 将所有与服务器的连接优雅地关闭。
      console.log('将所有与服务器的连接优雅地关闭。')
    }
  });
}