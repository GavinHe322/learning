var webpack = require('webpack')

module.exports = {
    entry: {
        build1: './main1.jsx',
        build2: './main2.jsx'
    },
    output: {
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js[x]?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react']
                    }
                }
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'commons',
            // the commons chunk name
            filename: 'commons.js'
        })
    ]
}