/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    return s.split('').sort().join('') == t.split('').sort().join('')
    // var dic1 = {},
    //     dic2 = {},
    //     i = 0;
    // for (i of s) {
    //     dic1[i] = dic1[i] >=0 ? dic1[i] * 1 + 1 : 1 
    // }
    // for (i of t) {
    //     dic2[i] = dic2[i] >=0 ? dic2[i] * 1 + 1 : 1 
    // }
    // console.log(dic1)
    // return dic1 == dic2
};

var s = 'anagram'
var t = 'nagaram'

console.log(
    isAnagram(s, t)
)