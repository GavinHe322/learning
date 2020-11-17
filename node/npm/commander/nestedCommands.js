const { command } = require('commander')
const commander = require('commander')
const log = console.log
const program = new commander.Command()
const brew = program.command('brew')

/**
 * try to follwing
 * 
 */
brew
  .command('tea')
  .action(() => {
    log('brew tea')
  })

brew
  .command('coffee')
  .action(() => {
    log('brew coffee')
  })

function makeHeatCommand() {
  const heat = new commander.Command('heat')
  heat
    .command('jup')
    .action(() => {
      log('heat jup')
    })

  heat
    .command('pot')
    .action(() => {
      log('heat pot')
    })

  return heat
}

program.addCommand(makeHeatCommand())

program.parse(process.argv)
