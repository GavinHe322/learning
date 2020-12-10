const acorn = require('acorn')
const generate = require('@babel/generator').default

const code = `
const a = Math.PI
function fn() {
  console.log(a)
}
fn()

`

const ast = acorn.parse(code, {
  ecmaVersion: 'latest',
  sourceType: 'script'
})

console.log(generate(ast))
