var program = require('commander')

program
  .usage('-f <package-name>')
  .option('-f, --force', 'force installation')

program.parse(process.argv)

const pkgs = program.args
console.log(pkgs)

if (!pkgs.length) {
  console.error('packages required')
  process.exit(1)
}

console.log()
if (program.force) console.log('  force: install')
pkgs.forEach(function(pkg) {
  console.log('  install : %s', pkg)
})
console.log()
