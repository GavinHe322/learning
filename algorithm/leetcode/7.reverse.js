/**
 * @param {number} s
 * @return {number}
 */
var reverse = function(x) {
    var re = 0;
    while (parseInt(x / 10)) {
        re = 10 * re + x - 10 * parseInt(x / 10);
        x = parseInt(x / 10);
    }
    if (re > 214748364 || re < -214748364) return 0;
    if ((re === 214748364 && x > 7) || (re == 214748364 && x < -8)) return 0;
    re = 10 * re + x;
    return re;
};
console.log(
    reverse(-123)
)
