
/**
 *  TypeScript的核心原则之一是对值所具有的结构进行类型检查。
 *  在TypeScript里，接口的作用就是为这些类型命名和为你的代码或第三方代码定义契约。
 * 
 *  在面访对象的编程中，接口是一种规范的定义，它定义了行为和动作的规范，在程序设计里面，接口起到一种限制和规范的作用。
 *  接口定义了某一批类所需要遵守的规范，接口不关心这些类的内部状态数据，也不关心这些类里方法的实现细节，它值规定这批类里必须
 *  提供某些方法，提供这方方法的类就可以瞒住实际需求， ts 中的接口类似于 java，同时还增加了更灵活的接口类型，包括属性，函数，可索引和类等。
 */

//  定义标准


//  1.属性接口  对 json 的约束

function printLabel(labelledObj: { label: string }) {
    console.log(labelledObj.label);
  }
  
  var myObj = { size: 10, label: "Size 10 Object" };
  printLabel(myObj);
  

interface SquareConfig{
    // 必须 传入
    firstName: string;
    secondName: string;
}

function printName(name: SquareConfig): void {
    // 比如传入对象 firstName secondName
    console.log(name.firstName, name.secondName)
}

// var obj = {
//     firstName: '张三',
//     secondName: '李四',
//     age: 59
// }

// printName(obj)
printName({
    firstName: '张三',
    secondName: '李四',
    // age: 124,  //error
})




interface Config {
    type: string
    url: string
    data?: string
    dataType?: string
}

function ajax(config: Config) {
    var xhr = new XMLHttpRequest();
    xhr.open(config.type, config.url, true)
    xhr.send(config.data)
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log('成功')
            if (config.dataType == 'json') {
                console.log(JSON.parse(xhr.responseText))
            } else {
                console.log(xhr.response)
            }
        }
    }

}

ajax({
    type: 'get',
    url: 'http://localhost:3000/comment/music?id=186016&limit=1',
    dataType: 'json'
})