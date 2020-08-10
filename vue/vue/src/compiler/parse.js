function parse(template) {
    console.log(template, 'tee')

    var stack = []
    let root
    let currentParent

    function closeElement(element) {
        trimEndingWhitespace(element)
        // debugger
        if (!element.processed) {
            element = processElement(element)
        }

        if (currentParent /* && 不是 style script... */) {
            currentParent.children.push(element)
        }
    }

    function processElement(element) {
        processAttrs(element)

        return element
    }

    function processAttrs(el) {
        var list = el.attrsList
        debugger
        var i, l, name, rawName, value, modifiers, syncGen, isDynamic
        for (i = 0, l = list.length; i < l; i++) {
            name = rawName = list[i].name
            value = list[i].value
            /**
             * 一堆逻辑
             * 指令
             * model
             * tag
             * ...
             */
            addAttr(el, name, JSON.stringify(value), list[i])
        }
    }

    function addAttr(el, name, value, range, dynamic) {
        var attrs = dynamic
            ? (el.dynamicAttrs || (el.dynamicAttrs = []))
            : (el.attrs || (el.attrs = []))
        attrs.push(rangeSetItem({ name: name, value: value, dynamic: dynamic}, range))
        el.plain = false
    }

    function rangeSetItem(item, range) {
        if (range) {
            if (range.start != null) {
                item.start = range.start
            }
            if (range.end != null) {
                item.end = range.end
            }
            return item
        }
    }

    function trimEndingWhitespace(el) {
        // remove trailing whitespace node
        var lastNode
        while (
            (lastNode = el.children[el.children.length - 1]) &&
            lastNode.type === 3 &&
            lastNode.text === ' '
        ) {
            el.children.pop()
        }
    }



    parseHTML(template, {
        start: function start(tag, attrs, unary, start, end) {

            var element = createASTElement(tag, attrs, currentParent)
            // debugger
            element.start = start
            element.end = end
            element.rawAttrsMap = element.attrsList.reduce(function (cumulated, attr) {
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
        },
        chars: function (text, start, end) {
            const children = currentParent.children

            if (text.trim()) {
                var res
                var child

                if (text !== ' ' && (res = parseText(text))) {
                    child = {
                        type: 2,
                        expression: res.expression,
                        tokens: res.tokens,
                        text
                    }
                }
                if (child) {
                    child.start = start
                    child.end = end
                    children.push(child)
                }
                // debugger
            }

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