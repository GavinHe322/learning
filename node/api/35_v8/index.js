const v8 = require('v8')

const { writeHeapSnapshot } = require('v8')
const {
  Worker,
  isMainThread,
  parentPort
} = require('worker_threads')

if (isMainThread) {
  const worker = new Worker(__filename)

  worker.once('message', (filename) => {
    console.log(`工作线程的堆转储: ${filename}`)
    // 获取主线程的堆转储。
    console.log(`主线程的堆转储: ${writeHeapSnapshot()}`)
  })

  // 通知工作线程创建一个堆转储。
  worker.postMessage('heapdump')
} else {
  parentPort.once('message', (message) => {
    if (message === 'heapdump') {
      // 为工作线程生成一个堆转储，并返回文件名到父线程。
      parentPort.postMessage(writeHeapSnapshot())
    }
  })
}