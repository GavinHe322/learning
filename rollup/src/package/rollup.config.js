import resolve from 'rollup-plugin-node-resolve'

export default {
  input: 'src/package/main.js',
  output: {
    format: 'cjs'
  },
  plugins: [ resolve() ]
}