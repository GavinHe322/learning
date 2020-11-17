const program = require('commander')
const log = console.log

program
  .version('0.0.1')
  .usage('<command> [options]')

log(program)

log(program.version())

program
  .command('create <app-name>')
  .description('create a new project powered by vue-cli-service')
  .option('-d, --default', 'Skip prompts and use default preset')
  .action((name, cmd) => {
    // const options = cleanArgs(cmd)
    // log(name, 'name-------------------\n')
    // log(options)
  })

program.on('--help', () => {
  log()
  log('help---')
  log()
})

program.parse(process.argv)

/**
 * 以下两个是 vue-cli 中的方法，主要是将 options 做一层处理
 */
function camelize (str) {
  return str.replace(/-(\w)/g, (_, c) => c ? c.toUpperCase() : '')
}

function cleanArgs (cmd) {
  log(cmd, 'cmd')
  const args = {}
  cmd.options.forEach(o => {
    const key = camelize(o.long.replace(/^--/, ''))
    // if an option is not present and Command has a method with the same name
    // it should not be copied
    log(key, 'key')
    if (typeof cmd[key] !== 'function' && typeof cmd[key] !== 'undefined') {
      args[key] = [key]
    }
  })
  return args
}