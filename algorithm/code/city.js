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

let i1, i2, i3
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
    if (!result.length) {
        result.push(obj)
        continue
    }

    var res = result.findIndex(arr => {
        return arr.name == province
    })
    if (res !== -1) {
        // result[res].children = 
        let children = obj.children.concat(result[res].children)
        // let hahah = []
        console.log(children, 'chidl')
        // children.forEach((item, index, arr) => {
        //    if (arr[index + 1] && item.name == arr[index + 1].name) {
        //         item.children = item.children.concat(arr[index + 1].children)
        //         // arr.splice(index + 1, 1)
        //    }
        // })
        let map = {};
        let mapChildren = [];
        for (i2 = 0; i2 < children.length; i2++) {
            if (!map[children[i2].name]) {
                map[children[i2].name] = i2
                mapChildren.push(
                    children[i2]
                )
            } else {
                var a = mapChildren[map[children[i2].name]]
                debugger;
                mapChildren[map[children[i2].name]] = children[i2].children.concat(
                    mapChildren[map[children[i2].name]].children
                )
                map[children[i2].name] = i2
            }
        }
        console.log(mapChildren)
        result[res].children = mapChildren
    } else {
        result.push(obj)
    }

}

console.log(result)


