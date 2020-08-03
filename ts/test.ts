// let unSure: string | undefined | null = undefined 
// unSure = '124'
// unSure = undefined
// unSure = null


// declare function  create(o: object | null): void;


// let object: object = {
//     a: 124
// }

// console.log(object)

// let someValue: any = 'this is a string'
// let strLength: number = (someValue as string).length

// let someValue: any = "this is a string";

// let strLength: number = (<string>someValue).length;


// 普通接口

// interface labelledValue {
//     label: string
// }

// function printLabel(labelledObj: labelledValue): void {
//     console.log(labelledObj.label)
// }


// let myobj = {
//     size: 14,
//     label: 'size 10 object'
// }

// printLabel(myobj)

interface SquareConfig {
    // color?: string;
    // width?: number;
    // [propName: string]: any;
    [key: string]: string | number
}

const SquareOptions: SquareConfig = {
    color: '1',
    width: 1,
    name: '1',
    age: '1'
}

console.log(SquareOptions)
