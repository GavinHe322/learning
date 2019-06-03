var webpack = require('webpack')
var UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: './main.js',
    output: {
        filename: 'build.js',
    },
    plugins: [
        new UglifyJsPlugin()
    ]
}