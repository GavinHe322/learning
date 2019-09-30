const data = [
    {
        province: '广东省',
        city: '广州',
        area: '天河区'
    },
    {
        province: '广东省',
        city: '广州',
        area: '白云区'
    },
    {
        province: '广东省',
        city: '深圳',
        area: '深圳'
    },
    {
        province: '广东省',
        city: '广州',
        area: '荔湾'
    },
    {
        province: '北京市',
        city: '北京市',
        area: '朝阳区'
    }
]

const result = []

let i1, i2
for (i1 in data) {
    let {province, city, area} = data[i1]
    let obj = {
        name: province,
        children: [
            {
                name: city,
                children: [
                    {
                        name: area
                    }
                ]
            }
        ]
    }

    var res = result.findIndex(arr => {
        return arr.name == province
    })
    if (res !== -1) {
        let children = obj.children.concat(result[res].children)
        let map = {};
        let mapChildren = [];
        for (i2 = 0; i2 < children.length; i2++) {
            if (map[children[i2].name] === undefined) {
                map[children[i2].name] = i2
                mapChildren.push(
                    children[i2]
                )
            } else {
                // debugger
                mapChildren[map[children[i2].name]].children = mapChildren[map[children[i2].name]].children.concat(
                    children[i2].children
                )
            }
        }
        result[res].children = mapChildren
    } else {
        result.push(obj)
    }

}

console.log(result)


var arr = []

for (i1 = 0; i1 < 100000; i1++) {
    arr.push({
        i1: i1
    })
}

console.time('1.forin')
for (var i in arr) {
    // console.log(i)
}
console.timeEnd('1.forin')

console.time('1.forof')
for (var i of arr) {
    // console.log(i)
}
console.timeEnd('1.forof')