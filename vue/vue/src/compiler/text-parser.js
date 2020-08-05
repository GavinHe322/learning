let defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g

function parseText(text) {
  // debugger
  const tagRE = defaultTagRE

  if (!tagRE.test(text)) {
    return
  }

  const tokens = []
  const rawTokens = []
  let lastIndex = tagRE.lastIndex = 0
  let match, index, tokenValue

  while (match = tagRE.exec(text)) {
    index = match.index
    // push text token
    if (index > lastIndex) {
      rawTokens.push(tokenValue = text.slice(lastIndex, index))
      tokens.push(JSON.stringify(tokens))
    }
    // tag token
    // 此处原来是 parseFilters
    var exp = match[1].trim()
    tokens.push((`_s(${exp})`))
    rawTokens.push({'@binding': exp})
    lastIndex = index + match[0].length
  }

  if (lastIndex < text.length) {
    rawTokens.push(tokenValue = text.slice(lastIndex))
    tokens.push(JSON.stringify(tokenValue))
  }
  return {
    expression: tokens.join('+'),
    tokens: rawTokens
  }
}