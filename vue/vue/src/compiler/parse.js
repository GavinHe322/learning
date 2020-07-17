function parse(template) {
    console.log(template, 'tee')

    var stack = []
    let root
    let currentParent
    

    parseHTML(template, {
        start: function start(tag, attrs, unary, start, end) {
            
            var element = createASTElement(tag, attrs, currentParent)
            debugger
            element.start = start
            element.end = end
            element.rawAttrsMap = element.attrsList.reduce(function(cumulated, attr) {
                cumulated[attr.name] = attr
                return cumulated
            }, {})

            //  一堆验证


            if (!root) {
                root = element
                // checkRootConstraints tag =? slot =? template
            }

            if (!unary) {
                currentParent = element
                stack.push(element)
            } else {
                closeElement(element)
            }
        },
        end: function end(tag, start, end) {
            var element = stack[stack.length - 1]
            // pop stack
            stack.length -= 1
            currentParent = stack[stack.length - 1]

            element.end = end
            closeElement(element)
        }
    })
    return root
}

function createASTElement(tag, attrs, parent) {
    return {
        type: 1,
        tag: tag,
        attrsList: attrs,
        attrsMap: makeAttrsMap(attrs),
        rawAttrsMap: {},
        parent: parent,
        children: []
    }
}

function makeAttrsMap(attrs) {
    var map = {}
    for (var i = 0, l = attrs.length; i < l; i++) {
        if (map[attrs[i].name]) {
            console.log('dubplicate attribute')
        }
        map[attrs[i].name] = attrs[i].value
    }
    return map
}