const vm = require('vm')

const context = {
  animal: 'cat',
  count: 2,
  setTimeout: setTimeout,
  log: console.log
}

const script = new vm.Script(`
  count += 1;
  name = 'Kitty';
  setTimeout(() => {log(count)}, 1000);
`)

vm.createContext(context)

for (let i = 0; i < 10; i++) {
  script.runInContext(context)
}

console.log(context) // count: 12, name: Kitty
