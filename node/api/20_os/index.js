// 提供于操作系统相关的使用方法和属性

const os = require('os')

let log = console.log

// 二进制文件操作系统
/**
 * arm
 * arm64
 * ia32
 * mips
 * mipsel
 * ppc
 * ppc64
 * s390
 * s390x
 * x32
 * x64
 */
log(
  os.arch()
)

// 返回 cpu对象
log(os.cpus())


// 返回系统内存量，以字节返回
log(os.freemem())

// 返回当前用户的主目录字符串路径
log(os.homedir())

// 返回主机名称
log(os.hostname())

// 平均负载，UNIX概念
// windows始终为 [0, 0, 0]
log(os.loadavg())

// 返回一个包含已分配网络地址的网络接口对象
log(os.networkInterfaces())

// 返回操作系统平台的字符串
/**
 * aix
 * darwin
 * freebsd
 * linux
 * openbsd
 * sunos
 * win32
 */
log(os.platform())

// 设置优先级
// os.setPriority(['pid'], '优先级')

// 内存总量(字节)
log(os.totalmem())


// 操作系统名称
/**
 * Linux -> Linux
 * macOS -> Darwin
 * Windows -> WINDOWS_NT
 */
log(os.type())

