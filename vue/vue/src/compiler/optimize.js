/**
 * 优化器目标：便利生成的 AST Trees，并检测静态的不需要更改的 dom 部分
 * 
 * 1. 将他们提升为常量，这样我们就不再需要每次重新渲染时为他们创建新的节点
 * 2. 在 patch 过程中跳过他们
 */

function optimize (root, options) {
  if (!root) return

  // first pass: mark all non-static node.
  // 标记所有非静态节点
  markStatic(root)
  // second pass: mark static roots
  markStaticRoots(root)
}

function markStatic (node) {
  node.static = isStatic(node)

  if (node.type === 1) {
    // 这里原先有这样的逻辑
    // 标记为 component slot 为 static，这样可以避免
    // 1.组件无法改变插槽节点
    // 2.静态插槽内容无法进行热重载

    for (var i = 0, l = node.children.length; i < l; i++) {
      var child = node.children[i]
      markStatic(child)
      if (!child.static) {
        node.static = false
      }
    }
  }
}

function isStatic (node) {
  if (node.type === 2) { // expression
    return false
  }
  if (node.type === 3) { // text
    return true
  }
  return !!(
    node.pre || // v-pre
    (
      !node.hasBindings && // no dynamic bindings
      !node.if && !node.for // not v-if or v-for or v-else
      // !isBuiltInTag(node.tag) && // not a built-in
      // isPlatformReservedTag(node.tag) && // not a component
      // !isDirectChildOfTemplateFor(node) &&
      // Object.keys(node).every(isStaticKey)
    )
  )
}

function markStaticRoots(node) {
  if (node.type === 1) {
    // if (node.static || node.once) {
    //   node.staticInFor = isInFor
    // }
  
    if (node.static && node.children.length && !(
      node.children.length === 1 &&
      node.children[0].type === 3
    )) {
      node.staticRoot = true
      return
    } else {
      node.staticRoot = false
    }

    if (node.children) {
      for (var i = 0, l = node.children.length; i < l; i++) {
        markStaticRoots(node.children[i])
      }
    }
  }
}