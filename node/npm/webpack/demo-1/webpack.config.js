const path = require('path')
console.log(__dirname)
console.log(path.resolve(__dirname, 'main.js'))

module.exports = {
  /**
   * string
   * Array<string>
   * Object
   */
  entry: {
    main: path.resolve(__dirname, 'main.js')
  },
  /**
   * id   Chunk 唯一标识, 从0开始
   * name Chunk 的名称
   * hash Chunk 的唯一标识的Hash值
   * chunkhash Chunk内容的Hash值
   */
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    /**
     * libraryTarget: 以何种库导出
     * var(默认)
     * commonjs
     * commonjs2
     * this
     * window
     * global
     * 
     * libraryExport -> 只有在commonjs or commonjs2 才有意义
     * 
     * library: 配置导出库的名称
     */
    // libraryTarget: 'window',
    libraryTarget: 'global',
    library: 'libraryName'
  }
}