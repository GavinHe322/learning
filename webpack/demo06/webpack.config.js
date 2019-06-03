module.exports = {
    entry: './main.js',
    output: {
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}