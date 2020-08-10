var CodegenState = function CodegenState (options) {
  this.options = options || {}
  this.onceId = 0
  this.staticRenderFns = [];
}


function generate(ast, options) {
  var state = new CodegenState(options)
  var code = ast ? genElement(ast, state) : '_c("div")'

  return {
    render: (`with(this){return ${code} }`),
    staticRenderFns: state.staticRenderFns
  }
}

function genElement(el, state) {
  // 这里忽略了源码很多细节
  // component or element
  var code

  /**
   * data: "{attrs:{"id":"app"}}"
   */
  var data = genData(el, state)

  var children = genChildren(el, state, true)
  code = `_c('${el.tag}'${
    data ? `,${data}` : '' // data
  }${
   children ? `,${children}`  : '' // children
  })`

  return code
}

function genData(el, state) {
  var data = '{'
  // attributes
  if (el.attrs) {
    data += `attrs:(${genProps(el.attrs)}),`
  }

  data = data.replace(/,$/, '') + '}'

  return data
}

function genProps(props) {
  var staticProps = ''
  var dynamicProps = ''
  for (var i = 0, l = props.length; i < l; i++) {
    var prop = props[i]
    var value = prop.value
    if (prop.dynamic) {
      dynamicProps += (prop.name) + ',' + value + ','
    } else {
      staticProps += "\"" + (prop.name) + "\":" + value + ","
    }
  }
  staticProps = '{' + (staticProps.slice(0, -1)) + '}'
  if (dynamicProps) {
    return ('_d(' + staticProps + ',[' + (dynamicProps.slice(0, -1)) + '])')
  } else {
    return staticProps
  }
}

function genChildren(el, state, checkSkip) {
  var children = el.children
  if (children.length) {
    const el$1 = children[0]
    
    /**
     * getNormalizationType
     * 0: 不需要规范化
     * 1: 需要简单规范化 (可能是一层嵌套的 array)
     * 2: 需要完全规范化
     */
    const normalizationType = 0

    const gen = genNode

    return `[${children.map(c => gen(c, state)).join(',')}]${
      normalizationType ? `,${normalizationType}` : ''
    }`
  }
}

function genNode(node, state) {
  if (node.type === 1) {
    return genElement(node, state)
  } else if (node.type === 3 && node.isComment) {
    return genComment(node)
  } else {
    return genText(node)
  }
}

function genText(text) {
  return `_v(${text.type === 2
    ? text.expression // no need for () becasuse already wrapped in _s()
    : text.expression
  })`
}

function genComment(comment) {
  return `_e(${JSON.stringify(comment.text)})`
}