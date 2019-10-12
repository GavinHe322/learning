function Compile(el, vm) {
    this.$vm = vm
    this.$el = this.query(el)
    console.log(
        this.$el
    )
    if (this.$el) {
        this.$fragment = this.node2Fragment(this.$el)
        this.init()
        this.$el.appendChild(this.$fragment)
    }
}

Compile.prototype = {
    constructor: Compile,
    node2Fragment: function(el) {
        var fragment = document.createDocumentFragment(),
            child

        // 将原生节点拷贝到 fragment
        while (child = el.firstChild) {
            fragment.appendChild(child)
        }
        return fragment
    },

    init: function() {
        console.log(
            this.$fragment
        )
        this.compileElement(this.$fragment)
    },
    compileElement(el) {
        var childNodes = el.childNodes,
            vm = this
        console.log(childNodes, 'compileElement')

        Array.prototype.slice.call(childNodes).forEach(function(node) {
            // console.log(node, 'node')
            var text = node.textContent
            var reg = /\{\{(.*)\}\}/

            if (vm.isElementNode(node)) {
                vm.compile(node)
            } else if (vm.isTextNode(node) && reg.test(text)) {
                vm.compileText(
                    node, RegExp.$1.trim()
                )
            }

            if (node.childNodes && node.childNodes.length) {
                vm.compileElement(node)
            }

        })
    },

    compileText(node, exp) {
        compileUtil.text(node, this.$vm, exp)
    },

    isElementNode(node) {
        return node.nodeType === 1
    },

    query(el) {
        if (typeof el === 'string') {
            const selected = document.querySelector(el)
            if (!selected) {
                console.error('Connot find element' + el)
                return document.createElement('div')
            }
            return selected
        }
    }
}

// 指令处理集合
var compileUtil = {
    text: function(node, vm, exp) {
        this.bind(node, vm, exp, 'text')
    }
}