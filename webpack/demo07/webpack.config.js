module.exports = {
    entry: './main.js',
    output: {
        filename: 'build.js'
    },
    module: {
        rules: [{
            test: /\.(png|jpg)$/,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 8192
                }
            }]
        }]
    }
}