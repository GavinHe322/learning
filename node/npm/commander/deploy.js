const program = require('commander')
const log = console.log

program
  .version('0.0.1')
  .option('-C, --chdir <pat>', 'change the working directory')
  .option('-C, --config <path>', 'set config path. defaults to ./deploy.conf')
  .option('-T, --on-tests', 'ignore test hook')

program
  .command('setup [env]')
  .description('run setup commands for all envs')
  .option('-s, --setup_mode [mode]', 'Which setup mode to use')
  .action((env, options) => {
    const mode = options.setup_mode || 'normal'
    env = env || 'all'
    log(`setup for %s env(s) with %s mode`, env, mode)
  })

program
  .command('exec <cmd>')
  .alias('ex')
  .description('execute the given remote cmd')
  .option('-e, --exec_mode <mode>', 'Which exec mode to use')
  .action((cmd, options) => {
    log('exec %s using %s mode', cmd, options.exec_mode)
  }).on('--help', function() {
    log('Examples:')
    log()
    log('    & deploy exec sequential')
    log('    & deploy exec async')
    log()
  })

program.parse(process.argv)

log(program.args)
