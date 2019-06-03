var webpack = require('webpack')

var devFlagPlugin = new webpack.DefinePlugin({
    __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || "false"))
})

module.exports = {
    entry: './main.js',
    output: {
        filename: 'build.js'
    },
    plugins: [devFlagPlugin]
}