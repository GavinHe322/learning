import resolve from 'rollup-plugin-node-resolve'

export default {
  input: 'src/Peerdependencies/main.js',
  output: {
    format: 'cjs'
  },
  plugins: [ resolve({
    customResolveOptions: {
      moduleDirectory: 'node_modules'
    }
  }) ],
  external: [ 'lodash' ]
}