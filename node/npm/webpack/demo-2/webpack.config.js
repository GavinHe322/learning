const path = require('path')

module.exports = {
  entry: {
    main: path.resolve(__dirname, 'src/main.js')
  },
  output: {
    filename: '[name][hash].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        enforce: 'post',
        test: /\.js$/,
        // use: ['babel-loader?cacheDirectory'],
        use: 'babel-loader',
        options: {
          cacheDirectory: true
        },
        include: path.resolve(__dirname, 'src'),
        // exclude: 
      }
    ]
  }
}