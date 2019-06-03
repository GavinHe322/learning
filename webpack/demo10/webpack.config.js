var HtmlwebpackPlugin = require('html-webpack-plugin')
var OpenBrowserPlugin =require('open-browser-webpack-plugin')


module.exports = {
    entry: './main.js',
    output: {
        filename: 'build.js'
    },
    plugins: [
        new HtmlwebpackPlugin({
            title: '利用 html-webpack-plugin 生成的demo',
            filename: 'index.html'
        }),
        new OpenBrowserPlugin({
            url: 'http://localhost:8080'
        })
    ]
}