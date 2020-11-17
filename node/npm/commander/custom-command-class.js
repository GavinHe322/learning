var commander = require('commander')

const log = console.log

class MyCommand extends commander.Command {
  createCommand(name) {
    const cmd = new MyCommand(name)
    cmd.option('-d, --debug', 'output options')
    return cmd
  }
}

const program = new MyCommand()

program
  .command('server')
  .option('--port <port-nubmer>', 'specify port number', 80)
  .action((cmd) => {
    if (cmd.debug) {
      log('Options:')
      log(cmd.opts())
      log()
    }
    log(`Start serve on port ${cmd.port}`)
  })

program.parse()

/**
 * command:
 * node custom-command-class.js server --port 200 -d
 * output
 * options:
 * { debug: true, port: '200' }
 * 
 * Start serve on port 200
 */
