function createCompilerCreator(baseCompile) {
    return function createCompiler() {
        function compile(template) {

            const compiled = baseCompile(template.trim())

            return compiled
        }

        return {
            compile,
            compileToFunctions: createCompileToFunctionFn(compile)
        }
    }
}

const createCompiler = createCompilerCreator(function baseCompile(template, options) {
    const ast = parse(template.trim())
    optimize(ast)
    
    var code = generate(ast, options)
    return {
        ast,
        render: code.render,
        staticRenderFns: code.staticRenderFns
    }
})

const { compile, compileToFunctions } = createCompiler()
