const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ClearWebpackPlugin = require('clean-webpack-plugin')
module.exports = {
    // entry: './src/index.js',
    entry: {
        app: './src/index.js',
        print: './src/print.js',
    },
    plugins: [
        new ClearWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output management/webpack.config.js设置的title?',
        })
    ],
    output: {
        // filename: 'build.js',
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
};