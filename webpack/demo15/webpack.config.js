var webpack = require('webpack')

module.exports = {
    entry: {
        app: './main.js',
        vender: ['jquery'],
    },
    output: {
        filename: 'build.js'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vender',
            filename: 'vender.js'
        })
    ]
}