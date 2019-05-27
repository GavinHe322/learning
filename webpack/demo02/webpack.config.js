const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'webpack-numbers.js',
        library: 'webpackNumbers',
        libraryTarget: 'umd'
    },
    externals: {
        lodash: {
            commonjs: 'loadash',
            commonjs2: 'lodash',
            amd: 'lodash',
            root: '_'
        }
    }
}