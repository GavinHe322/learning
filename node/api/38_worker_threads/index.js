
// worket_threads 模块允许使用并行地执行 JavaScript 的线程

/**
 * 工作线程对于执行 CPU 密集型的 JavaScript 操作非常有用。
 * 它们在 I/O 密集型的工作中用途不大。
 * Node.js 的内置的异步 I/O 操作比工作线程效率更高。
 */

// 与 child_process 或 cluster 不同， worker_threads 可以共享内存。
// 它们通过传输 ArrayBuffer 实例或共享 SharedArrayBuffer 实例来实现。

const assert = require('assert')
const {
  Worker, MessageChannel, MessagePort, isMainThread, parentPort
} = require('worker_threads')

if (isMainThread) {
  const worker = new Worker(__filename)
  const subChannel = new MessageChannel()
  worker.postMessage({ hereIsYourPort: subChannel.port1 }, [subChannel.port1])
  subChannel.port2.on('message', (value) => {
    console.log('接收到:', value)
  })
} else {
  parentPort.once('message', (value) => {
    console.log(value)
    assert(value.hereIsYourPort instanceof MessagePort)
    value.hereIsYourPort.postMessage('工作线程正在发送此消息')
    value.hereIsYourPort.close()
  })
}