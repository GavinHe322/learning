const acorn = require('acorn')
const { readFileSync } = require('fs')

console.log(
  /**
   * script 👇
   * Node {
        type: 'Program',
        start: 0,
        end: 10,
        body: [
          Node {
            type: 'ExpressionStatement',
            start: 0,
            end: 10,
            expression: [Node]
          }
        ],
        sourceType: 'script'
      }

      module
      Node {
      type: 'Program',
        start: 0,
        end: 10,
        body: [
          Node {
            type: 'ExpressionStatement',
            start: 0,
            end: 10,
            expression: [Node]
          }
        ],
        sourceType: 'module'
      }
   */
  acorn.parse('1 + 1 == 2', {
    sourceType: 'module',
    ecmaVersion: '2050'
  })
)

var test = readFileSync('./test.js', {encoding: 'utf-8'})

console.log(
  acorn.parse(test, {
    sourceType: 'script',
    ecmaVersion: '2050'
  })
)
