console.log('111')

import { h } from '../build/h.js'
import { init } from '../build/init.js'

console.log(h)
const patch = init()
const container = document.getElementById('container')

const div = h('div', 'nihao')

patch(container, div)
