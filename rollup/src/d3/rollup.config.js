export default {
  input: 'src/d3/main.js',
  external: [ 'd3' ],
  output: {
    format: 'amd',
    paths: {
      d3: 'https://d3js.org/d3.v5.js'
    }
  }
}