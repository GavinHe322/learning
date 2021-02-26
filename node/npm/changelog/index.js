var conventionalChangelog = require('conventional-changelog')

// "changelog": "conventional-changelog -p angular -i CHANGELOG.md -s --commit-path ."

conventionalChangelog({
  preset: 'angular'
})
.pipe(process.stdout)
