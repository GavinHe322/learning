/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
   const xs = Math.abs(x) + ''
   const xl = x + ''
   let iso, length
   let ise = false
   if (x < 0) {
       ise = true
   }
   (xl.length) % 2 == 0 ? iso = true : ise = false;

   if (iso) {
       length = Math.floor(xs.length / 2);
       for (let i = 0; i <= length; i++) {
           if (xs[i] !== xs[xl.length - 1 - i] || ise) {
               return false;
           }
       }
   } else {
       length = Math.floor(xs.length / 2) - 1
       for (let i = 0; i <= length; i++) {
           if(xs[i] != xs[xl.length - 1 - i] || ise) {
               return false;
           }
       }
   }
   return true;
};

console.log(
    isPalindrome(10)
);
