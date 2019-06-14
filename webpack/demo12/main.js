require.ensure(['./a'], function(require) {
    var content = require('./a')
    console.log(content)
    document.open()
    document.write("<h1>" + content + "</h1>")
    document.close()
})

console.log(1)