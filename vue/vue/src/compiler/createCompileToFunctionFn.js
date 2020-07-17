function createCompileToFunctionFn(compile) {
    return function compileToFunctions(template) {

        const compiled = compile(template)
        
        return compiled
    }
}