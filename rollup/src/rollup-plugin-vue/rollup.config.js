import vue from 'rollup-plugin-vue'
const { resolve } = require('path')

console.log(process.pwd, resolve(__dirname, 'index.vue'))

export default {
  input: resolve(__dirname, 'index.vue'),
  output: {
    format: 'esm',
    file: resolve(__dirname, 'dist/index.js')
  },
  plugins: [
    vue()
  ]
}
