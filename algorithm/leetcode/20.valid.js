/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let valid = true
      const stack = [];

      const mapper = {
          '(': ')',
          '[': ']',
          '{': '}'
      }
      for (let i in s) {
          let v = s[i]
          if (['(', '[', '{'].indexOf(v) > -1) {
              stack.push(v)
          } else {
              const prek = stack.pop()
              if (v !== mapper[prek]) {
                  return false
              }
          }
      }

      if (stack.length == 0) return true

      return valid
};
console.log(
    isValid(
        '{{}}[()]'
    )
)