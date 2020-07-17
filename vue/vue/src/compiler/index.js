
function $mount(el) {
    
    let template = query(el)

    const options = this.$options

    if (template) {
        template = template.innerHTML
        compileToFunctions(template)
    }

}


function query(el) {
    return document.querySelector(el)
}