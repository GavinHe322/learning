module.exports = {
    entry: './main.jsx',
    output: {
        filename: 'build.js'
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
    externals: {
        'data': 'data'
    }
}