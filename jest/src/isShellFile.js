module.exports = function(filename) {
    // return true
    // return filename.indexOf('.sh') > -1
    // let index = filename.indexOf(".sh");
    // return index > -1 && index != 0;
    // return !filename.startsWith('.') && !filename.includes('txt')  && index > -1;

    // let index = filename.lastIndexOf(".");
    // return !filename.startsWith('.')  && filename.substr(index) == '.sh';
    console.log(filename)
    return !filename.startsWith('.')  && filename.substr(filename.lastIndexOf(".")) == '.sh';

}