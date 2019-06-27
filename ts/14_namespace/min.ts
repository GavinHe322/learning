import { A } from "./MinClass";

console.log(A.MinClass)


const min = new A.MinClass()

min.add(12)
min.add(11)
min.add(20)
console.log(
    min.min()
)