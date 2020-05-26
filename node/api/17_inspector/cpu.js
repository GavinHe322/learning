const inspector = require('inspector')
const fs = require('fs')
const session = new inspector.Session()
session.connect()


session.post('Profiler.enable', () => {
  session.post('Profiler.start', () => {
    session.post('Profiler.stop', (err, { profile }) => {
      if (!err) {
        fs.writeFileSync('./profile.cpuprofile', JSON.stringify(profile))
      }
    })
  })
})