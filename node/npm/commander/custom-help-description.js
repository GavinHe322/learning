const { Command } = require('commander')
const program = new Command()
const log = console.log

log(Command)

program
  .helpOption('-c, --HELP', 'custom help message')
  .option('-s, --sessions', 'add sesion support')
  .option('-t, --template <engine>', 'specify template engine (jade|ejs) [jade]', 'jade')

program
  .command('child')
  .option('--gender', 'speciftc gender of child')
  .action((cmd) => {
    log('Chilsubcommand')
  })

program.parse()
