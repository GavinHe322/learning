process.title = 'dir title'

const log = console.log
/**
 * aix
 * darwin
 * freebsd
 * linux
 * openbsd
 * sunos
 * win32
 */
log(`此平台是 ${process.platform}`)

Promise.resolve('resolve1').then(res => {
  log(res)
})

process.nextTick(() => {
  log('nextTick')
})
console.log('resolve2 beforce')

log(
  Promise.resolve('resolve2')
)

setTimeout(() => {
  log('setTimeout')
}, 2000)
/**
  此平台是 win32
  resolve2 beforce
  Promise { 'resolve2' }
  nextTick
  resolve1
  setTimeout
*/
