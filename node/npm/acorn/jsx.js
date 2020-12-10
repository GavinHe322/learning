const acorn = require('acorn')
const jsx = require('acorn-jsx')

const JsxParser = acorn.Parser.extend(jsx())
const code = `
<div>
  <p>Hello JSX!</p>
</div>
`

console.log(
  JsxParser.parse(code, {
    ecmaVersion: 'latest'
  })
)
