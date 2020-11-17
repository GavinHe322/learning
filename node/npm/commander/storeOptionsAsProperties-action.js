const program = require('commander')
const log = console.log

/**
 * Try to flowing
 * node storeOPtionsAsProperties-action.js show
 * undefined
 * {}
 * 
 * node storeOptionsAsProperties-action.js --name foo show --action jump
 * jump
 * foo
 */
program
  .storeOptionsAsProperties(false)
  .passCommandToAction(false)

program
  .name('my-program-name')
  .option('-n, --name <name>')

program
  .command('show')
  .option('-a, --action <action>')
  .action((options) => {
    log(options.action, 'show')
  })

program.parse(process.argv)

log(program.opts())
