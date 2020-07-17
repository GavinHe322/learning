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

const createCompiler = createCompilerCreator(function baseCompile(template) {
    const ast = parse(template.trim())
    console.log(ast)
    return {
        ast
    }
})

const { compile, compileToFunctions } = createCompiler()
