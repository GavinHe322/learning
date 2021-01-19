const fs = require('fs')
const path = require('path')

fs.stat('./index.js',{}, (err, stats) => {
  /**
   * Stats {
      dev: 3732888149,
      mode: 33206,
      nlink: 1,
      uid: 0,
      gid: 0,
      rdev: 0,
      blksize: 4096,
      ino: 281474977180526,
      size: 466,
      blocks: 0,
      atimeMs: 1611035336303.4663,
      mtimeMs: 1606201016924.459,
      ctimeMs: 1606201016924.459,
      birthtimeMs: 1594893841104.4785,
      atime: 2021-01-19T05:48:56.303Z,
      mtime: 2020-11-24T06:56:56.924Z,
      ctime: 2020-11-24T06:56:56.924Z,
      birthtime: 2020-07-16T10:04:01.104Z
    }
   */
  console.log(stats)
  console.log(stats.isDirectory())
})
