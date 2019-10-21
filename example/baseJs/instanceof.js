/**
 * instanceof
 */

 function Instanceof(L, R) {
     let prototype = R.prototype
     L = L.__proto__
     while (true) {
         if (L === null) {
             return false
         } else if (L === prototype){
            return true
         }
         L = L.__proto__
     }
    console.log(prototype, L)

 }

 function Aoo() {

 }
 var aoo = new Aoo();

 var boo = new String(1)

 console.log(
    Instanceof(aoo, Aoo),
    Instanceof(aoo, Object),
    Instanceof(boo, Aoo)
 )