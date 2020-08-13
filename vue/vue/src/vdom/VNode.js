function VNode(tag, data, children, text, elm, context, componentOptions) {
  this.tag = tag
  this.data = data
  this.children = children
  this.text = text
  this.elm = elm
  this.context = context
  this.parent = undefined
  this.isStatic = false

  var prototypeAccessors = { child: { configurable: true } }

  Object.defineProperties(VNode.prototype, prototypeAccessors)
}