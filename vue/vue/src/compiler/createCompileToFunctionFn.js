function createCompileToFunctionFn(compile) {
    return function compileToFunctions(template) {

        const compiled = compile(template)
        compiled.render = createFunction(compiled.render)
        console.log(compiled.render, 'compiled.render')
        return compiled
    }
}

function createFunction(code) {
    return new Function(code)
}