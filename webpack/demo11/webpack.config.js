var webpack = require('webpack')

var devFlagPlugin = new webpack.DefinePlugin({
<<<<<<< HEAD
    __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || "false" ))
})


=======
    __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || "false"))
})

>>>>>>> 027a34a5e1d519feccd94595ae5d1f7e91ff048e
module.exports = {
    entry: './main.js',
    output: {
        filename: 'build.js'
    },
<<<<<<< HEAD
    plugins: [
        devFlagPlugin
    ]
=======
    plugins: [devFlagPlugin]
>>>>>>> 027a34a5e1d519feccd94595ae5d1f7e91ff048e
}