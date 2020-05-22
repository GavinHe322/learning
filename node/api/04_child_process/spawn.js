// 父进程代码：
const child_process = require('child_process');
console.log('当前工作目录: ', process.cwd())
console.log('当前模块文件目录: ', __dirname)
for(var i = 0; i < 3; i++) {
    var cp = child_process.spawn('node', [__dirname + '/haha.js', i]);
    cp.stdout.on('data', function(data) {
        console.log('stdout: ' + data, 'data??');
    });
    cp.on('close', function(code) {
        console.log('子进程已退出，退出码 ' + code);
    });
}