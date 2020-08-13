function createElement(context, tag, data, children) {
  return _createElement(context, tag, data, children)
}

function _createElement(context, tag, data, children) {
  let vnode = new VNode(tag, data, children, undefined, undefined, context)
  return vnode
}