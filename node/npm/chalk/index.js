const chalk = require('chalk')
const log = console.log

log(chalk.blue('Hello'), ' World' + chalk.red('!'))

// Api
// chalk.<style>[.<style>...](string, [string...])

// styles
log(chalk.reset('Hello'))

log(chalk.bold('bold'))
log(chalk.dim('dim'))
log(chalk.italic('italic'))
log(chalk.underline('underline'))
log(chalk.inverse('inverse'))
log(chalk.hidden('hidden'))
log(chalk.strikethrough('strikethrough'))
log(chalk.hidden('hidden'))

// colors
log(chalk.underline.black('black'))
log(chalk.blue.bgRed.bold(['blue bgRed bold' + ' ?']))

log(chalk.white.bgGreen.bold('red bgGreen bold') + chalk.hex('#ff4400')('taobao'))

chalk.bgKeyword('orange')('Some orange text')
log()

const miles = 18;
const calculateFeet = miles => miles * 5280;
 
console.log(chalk`
    There are {bold 5280 feet} in a mile.
    In {bold ${miles} miles}, there are {green.bold ${calculateFeet(miles)} feet}.
`)