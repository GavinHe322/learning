function createCompilerCreator(baseCompile) {
    console.log(1)
    return function createCompiler() {
        function compile(template) {
            console.log(template)

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
    console.log(ast)
    optimize(ast)
    
    var code = generate(ast, options)
    console.log(code)
    return {
        ast,
        render: code.render,
        staticRenderFns: code.staticRenderFns
    }
})

const { compile, compileToFunctions } = createCompiler()
