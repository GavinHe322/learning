const parser = require('@babel/parser')

const code = `
import a from './a.js';
console.log(a);
`

const esTree = parser.parse(code, {
  sourceType: 'module',
  sourceFilename: 'parser-test.js'
})

console.log(esTree)
