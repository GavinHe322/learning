/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let res = 0,
        i = 0,
        temp = [];
    while(i < s.length) {
        if (!temp.includes(s[i])) {
            temp.push(s[i])
        } else {
            temp.shift();
            continue;
        }
        res = Math.max(res, temp.length)
        i++;
    }
    return res;
};

console.log(
    lengthOfLongestSubstring("bbbbb"),
    lengthOfLongestSubstring("abcabcbb"),
)