module.exports = {
    entry: './index.js',
    output: {
        filename: 'build.js'
    },
    module: {
        rules: [
            {
                test: /.\.css$/,
                use: ['style-loader', 'css-loader']
            },
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
    }
}