const program = require('commander')
const log = console.log

let cmdValue
let envValue

program
  .version('1.0.0')
  .arguments('<cmd> [env]')
  .description('test command', {
    cmd: 'command to run',
    env: 'environment to run test in'
  })
  .action((cmdValue, envValue) => {
    log('command: %s', cmdValue)
    log('enviroment: %s', envValue || 'no environment givin')
  })

program.parse(process.argv)

/**
 * Try the follwing:
 *  node env --help
 *  node env add
 *  node env add browser
 * 
 *  node cmd test
 */
