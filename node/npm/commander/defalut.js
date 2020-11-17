const { command, option } = require('commander')
const commander = require('commander')
const program = new commander.Command()
const log = console.log

program
  .command('build')
  .description('build web site for deployment')
  .action(() => {
    log('build')
  })

program
  .command('deploy')
  .description('deploy web site to production')
  .action(() => {
    log('deploy')
  })

program
  .command('serve', { isDefault: true })
  .description('launch web server')
  .option('-p, --port <port_number>', 'web port', 80)
  .action((opts) => {
    log(`server on port ${opts.port}`)
  })

program.parse(process.argv)
