
const path = require('path')
const log = console.log

// 返回拓展名
log(
  path.extname('index.html')
)
log(
  path.extname('index.index.html')
)

log(
  path.extname('index.')
)

// 格式
// windows
log(
  path.format({
    dir: 'c:\\path\\dir',
    base: 'file.txt'
  })
)

// linux
log(
  path.format({
    root: 'ignored',
    dir: '/home/user/dir',
    base: 'file.txt'
  })
)

log(
  path.format({
    root: '/',
    base: 'file.txt',
    ext: 'ignored'
  })
)

log(
  path.format({
    root: '/',
    name: 'file',
    ext: '.txt'
  })
)

// 是否为绝对路径
// linux
log(
  path.isAbsolute('/foo/bar'), // true
  path.isAbsolute('/foo/..'), // true
  path.isAbsolute('/foo/'), // true
  path.isAbsolute('../foo'), // false
)
// windows
log(
  path.isAbsolute('../'),   // false
  path.isAbsolute('C:/foo/..'),   // true
  path.isAbsolute('~/'),   // false
  path.isAbsolute('C:/foo/..'),   // true
  path.isAbsolute('./bar.js'),   // false
  path.isAbsolute('.'),   // false
)

// 连接
log(
  path.join('/foo', 'bar/aaa', 'index.js'),
  path.join('/foo', '', 'index.js'),
)

// 解析
log(
  // linux
  path.parse('/home/gavin/learning/node/api.js'),
  // windows
  path.parse('C:\\path\\dir\\api.js')
)

// 相对路径
log(
  // from...to
  // linux
  path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'),
  // windows
  path.relative('C:\\path\\dir\\api.js', 'C:\\path\\dir\\node\\api.js')
)

