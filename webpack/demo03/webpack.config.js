var webpack = require('webpack');

var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin'); //打包html的插件

module.exports = {
     entry:{
         'app/dist/js/index':'./app/src/js/index.js',  //入口文件
         'app/dist/js/vue':'./app/src/js/vue.min.js'  //入口文件

         //我们的是多页面项目，多页面入口配置就是这样，
         //app/src/page下可能还会有很多页面，照着这样配置就行

     },
     output:{
          //__dirname 当前webpack.config.js的路径
          filename: '[name].js',      //打包后index.js的名字，
                                     // 这个[name]的意思是,配置入口entry键值对里的key值,app/dist/js/index,最后的index，
                                     //这里无论你src/js/index.js这个脚本如何命名，打包后都将是index.js
        //   path: path.resolve(__dirname)
     },


     //插件
     plugins:[
        new HtmlWebpackPlugin({
            chunks:['app/dist/js/index'],
            filename:'app/src/index.html',
            template:'app/src/index.html'  
        })
     ]
}