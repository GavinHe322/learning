const generate = require('@babel/generator').default
const parse = require('@babel/parser').parse
console.log(generate)

const code = `
// example
class Example {}
`
const ast = parse(code)

const banner = `
my name ig gavin
`

const output = generate(ast, {
  sourceMaps: true,
  auxiliaryCommentAfter: banner
})

console.log(output, 'output')
