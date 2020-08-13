
function $mount(el) {
    
    let template = el = query(el)

    const options = this.$options

    if (template) {
        template = template.outerHTML
        const { render, staticRenderFns } = compileToFunctions(template)
        options.render = render
        options.staticRenderFns = staticRenderFns
    }
    /**
     * 这里原先两个逻辑，
     * runtime-only
     * runtime-compiler
     */
    mountComponent(this, el)
}


function query(el) {
    return document.querySelector(el)
}