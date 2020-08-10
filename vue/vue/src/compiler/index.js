
function $mount(el) {
    
    let template = query(el)

    const options = this.$options

    if (template) {
        template = template.outerHTML
        const { render, staticRenderFns } = compileToFunctions(template)
        console.log(render, staticRenderFns)
    }

}


function query(el) {
    return document.querySelector(el)
}