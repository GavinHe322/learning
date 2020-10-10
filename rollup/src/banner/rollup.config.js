const version = '1.0.0'
import resolve from 'rollup-plugin-node-resolve'

export default {
  input: 'src/banner/main.js',
  output: {
    file: 'bundle.js',
    format: 'cjs',
    banner: `/* my-library version is ${version} \n nihao ya */`,
    footer: '/* follow me on twitter @gavin_shuer */'
  },
  plugins: [ resolve() ]
}