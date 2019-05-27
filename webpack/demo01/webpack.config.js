const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ClearWebpackPlugin = require('clean-webpack-plugin')
module.exports = {
    // entry: './src/index.js',
    mode: 'development',
    entry: {
        index: './src/index.js',
    },
    devtool: 'inline-source-map',
    plugins: [
        new ClearWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Output management/webpack.config.js设置的title?',
            filename: 'index.html'
        })
    ],
    devServer: {
        contentBase: './dist'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};