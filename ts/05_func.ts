// 完整的函数类型

// let myAdd: (x: number, y: number) => number = (x: number, y: number): number => x + y

// console.log(
//   myAdd(1, 2)
// )

let myAdd: (baseValue: number, increment: number) => number =
    function(x, y) { return x + y; }


// 剩余参数

function buildName(firstName: string, ...resetOfName: string[]): string {
  return firstName + " " + resetOfName.join(" ")
}
console.log(buildName("Joseph", "Samuel", "Lucas", "MacKinzie"), '1')

interface IbuildNameFun {
  (fname: string, ...reset: string[]): string
}

// let buildNameFun: (fname: string, ...reset: string[]) => string = buildName
let buildNameFun: IbuildNameFun = buildName

console.log(buildNameFun("Joseph", "Samuel", "Lucas", "MacKinzie"), '2')

function f(this: void) {
  console.log(this)
}

console.log(
  f(), 'fff'
)

interface Card {
  suit: string;
  card: number;
}
interface Deck {
  suits: string[];
  cards: number[];
  createCardPicker(this: Deck): () => Card
}

let deck: Deck = {
  suits: ['12', '2345', '34567', '456789'],
  cards: Array(52),
  createCardPicker: function(this: Deck) {
    return () => {
      console.log(this, 'this???')
      let pickedCard = Math.floor(Math.random() * 52)
      let pickedSuit = Math.floor(pickedCard / 13)
      return { suit: this.suits[pickedSuit], card: pickedCard % 1 }
    }
  }
}

let cardPicker = deck.createCardPicker()
console.log(
  cardPicker()
)
