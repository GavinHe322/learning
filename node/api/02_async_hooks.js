const async_hooks = require('async_hooks')
const fs = require('fs')

// following is simple overview of the public API
// const eid = async_hooks.executionAsyncId()
// console.log(eid)

// const tid = async_hooks.triggerAsyncId()
// console.log(tid)

// const init = () => {console.log(...arguments, 'init')}
// const before = () => {console.log(...arguments, 'before')}
// const after = () => {console.log(...arguments, 'after')}
// const destroy = () => {console.log(...arguments, 'destroy')}
// const promiseResolve = () => {console.log(...arguments, 'promiseResolve')}

// const asyncHook = async_hooks.createHook({
//   init, before, after, destroy, promiseResolve
// })

// asyncHook.enable()

// asyncHook.disable();


let indent = 0;
async_hooks.createHook({
  init(asyncId, type, triggerAsyncId) {
    const eid = async_hooks.executionAsyncId();
    const indentStr = ' '.repeat(indent);
    fs.writeSync(
      1,
      `${indentStr}${type}(${asyncId}):` +
      ` trigger: ${triggerAsyncId} execution: ${eid}\n`);
  },
  before(asyncId) {
    const indentStr = ' '.repeat(indent);
    fs.writeFileSync('log.out',
                     `${indentStr}before:  ${asyncId}\n`, { flag: 'a' });
    indent += 2;
  },
  after(asyncId) {
    indent -= 2;
    const indentStr = ' '.repeat(indent);
    fs.writeFileSync('log.out',
                     `${indentStr}after:  ${asyncId}\n`, { flag: 'a' });
  },
  destroy(asyncId) {
    const indentStr = ' '.repeat(indent);
    fs.writeFileSync('log.out',
                     `${indentStr}destroy:  ${asyncId}\n`, { flag: 'a' });
  },
}).enable();

require('net').createServer(() => {}).listen(8080, () => {
  // Let's wait 10ms before logging the server started.
  setTimeout(() => {
    console.log('>>>', async_hooks.executionAsyncId());
  }, 10);
});