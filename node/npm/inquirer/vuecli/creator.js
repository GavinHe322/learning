const EventEmitter = require('events')
const PromptModuleApi = require('./PromptModuleAPI')
const { getPromptModules } = require('./util/createTools')
const debug = require('debug')
const inquirer = require('inquirer')

const isManualMode = answers => answers.preset === '__manual__'
const promptModules = getPromptModules()

module.exports = class Creator extends EventEmitter {
  constructor() {
    super()
    const { presetPrompt, featurePrompt } = this.resolveIntroPrompts()

    this.presetPrompt = presetPrompt
    this.featurePrompt = featurePrompt

    this.injectedPrompts = []
    this.promptCompleteCbs = []

    const promptApi = new PromptModuleApi(this)
    
    promptModules.forEach(m => m(promptApi))
  }

  create() {
    let preset = this.promptAndResolvePreset()
  }

  async promptAndResolvePreset(answers = null) {
    if (!answers) {
      // clearConsole(true)
      answers = await inquirer.prompt(this.resolveFinalPrompts())
      debug('vue-cli:answers')(answers)
    }
  }

  resolveFinalPrompts() {
    this.injectedPrompts.forEach(prompt => {
      const originalWhen = prompt.when || (() => true)
      prompt.when = answers => {
        return isManualMode(answers) && originalWhen(answers)
      }
    })

    const prompts = [
      this.presetPrompt, // default vue
      this.featurePrompt, // 特性 vuex router ts babel
      ...this.injectedPrompts,  // 是否保存未默认 之类的 babel.js 文件
    ]
    debug('vue-cli:prompts')(prompts)
    return prompts
  }

  resolveIntroPrompts() {
    const presets = this.getPresets()
    console.log(presets)

    const presetChoices = Object.entries(presets).map(([name, preset]) => {
      let displayName = name
      if (name === 'default') {
        displayName = 'Default'
      } else if (name === '__default_vue_3__') {
        displayName = 'Default (Vue 3 Preview)'
      }

      return {
        name: displayName,
        value: name
      }
    })

    const presetPrompt = {
      name: 'preset',
      type: 'list',
      message: 'Please pick a preset:',
      choices: [
        ...presetChoices,
        {
          name: 'Manually select features',
          value: '__manual__'
        }
      ]
    }

    const featurePrompt = {
      name: 'features',
      when: isManualMode,
      type: 'checkbox',
      message: 'Check the features needed for your project:',
      choices: [],
      pageSize: 10
    }

    return {
      presetPrompt,
      featurePrompt
    }
  }

  // options 文件合在一起
  getPresets() {
    const defaultPreset = {
      plugins: {
        '@vue/cli-plugin-babel': {},
        '@vue/cli-plugin-eslint': {
          config: 'base',
          lintOn: ['save']
        }
      }
    }
    const defaults = {
      presets: {
        'default': Object.assign({ vueVersion: '2' }, defaultPreset),
        '__default_vue_3__': Object.assign({ vueVersion: '3' }, defaultPreset)
      }
    }

    return Object.assign({}, /**原先有saveOptions */ defaults.presets)
  }
}
