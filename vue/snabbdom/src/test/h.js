const { h } = require('../package/h')

const container = h('div', { key: 0 },[
  h('span', { key: 0 }, 'span 0')
])

console.log(container)
/**
 * output:
 * {
    sel: 'div',
    data: { key: 0 },
    children: [
      {
        sel: 'span',
        data: [Object],
        children: undefined,
        text: 'span 0',
        elm: undefined,
        key: 0
      },
      {
        sel: 'span',
        data: [Object],
        children: undefined,
        text: 'span 1',
        elm: undefined,
        key: 1
      }
    ],
    text: undefined,
    elm: undefined,
    key: 0
  }
 */