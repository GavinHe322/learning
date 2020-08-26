const nodeOps = {
  createElement: function createElement(tagName) {
    return document.createElement(tagName)
  },
  createElementNS: function createElementNS(namespace, tagName) {
    return document.createElement(namespace + ':' + tagName)
  },
  parentNode: function parentNode(node) {
    return node.parentNode
  },
  appendChild: function appendChild(node, child) {
    if (child.nodeType === 3) {
      if (node.type === 'text') {
        node.setAttr('value', child.text)
        child.parentNode = node
      } else {
        const text = nodeOps.createElement('text')
        text.setAttr('value', child.text)
        node.appendChild(text)
      }
      return
    }
    node.appendChild(child)
  },
  insertBefore: function insertBefore(node, target, before) {
    if (target.nodeType === 3) {
      if (node.type === 'text') {
        node.setAttr('value', target.text)
        target.parentNode = node
      } else {
        const text = createElement('text')
        text.setAttr('value', target.text)
        node.insertBefore(text, before)
      }
      return
    }
    node.insertBefore(target, before)
  },
  nextSibling: function nextSibling(node) {
    return node.nextSibling
  },
  tagName: function tagName(node) {
    return node.tagName
  }
}

const hooks = ['create', 'activate', 'update', 'remove', 'destroy']

function createPatchFunction(backend) {
  let i, j
  const cbs = {}
  
  let { nodeOps, modules } = backend
  for (i = 0; i < hooks.length; i++) {
    cbs[hooks[i]] = []
    /**
     * 这里原先处理 modules 逻辑
     * 读取 VNode 中 attrs style 赋值给真实解点
     */
  }

  function emptyNodeAt(elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function insert(parent, elm, ref) {
    if (parent) {
      if (ref) {
        if(nodeOps.parentNode(ref) === parent) {
          nodeOps.insert
        }
      }
    }
  }

  // function invokeCreateHooks(vnode, insertedVnodeQueue) {
  // }

  function createChildren(vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {

      for (var i = 0; i < children.length; i++) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i)
      }
    }
  }

  function createElm(
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    debugger
    var data = vnode.data
    var children = vnode.children
    var tag = vnode.tag

    if (tag) {
      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode)


      createChildren(vnode, children, insertedVnodeQueue)

      // invokeCreateHooks(vnode, insertedVnodeQueue)
      insert(parentElm, vnode.elm, refElm)

    }
  }

  return function patch(oldVnode, vnode) {
    const insertedVnodeQueue = []

    if (oldVnode) {
      oldVnode = emptyNodeAt(oldVnode)
    }

    var oldElm = oldVnode.elm
    var parentElm = nodeOps.parentNode(oldElm)

    createElm(
      vnode,
      insertedVnodeQueue,
      parentElm,
      nodeOps.nextSibling(oldElm)
    )
    return vnode.elm
  }
}

const patch = createPatchFunction({
  nodeOps
})
