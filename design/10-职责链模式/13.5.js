// 13.5 异步的职责链

var log = console.log

var Chain = function(fn) {
  this.fn = fn
  this.successor = null
}

Chain.prototype.setNextSuccessor = function(successor) {
  return this.successor = successor
}

Chain.prototype.passRequest = function() {
  var ret = this.fn.apply(this, arguments)

  if (ret === 'nextSuccessor') {
    return this.successor && this.successor.passRequest.apply(this.successor, arguments)
  }

  return ret
}

Chain.prototype.next = function() {
  return this.successor && this.successor.passRequest.apply(this.successor, arguments)
}

var fn1 = new Chain(function() {
  log('1')
  return 'nextSuccessor'
})

var fn2 = new Chain(function() {
  log('2')
  var self = this
  setTimeout(function() {
    self.next()
  }, 2000)
})

var fn3 = new Chain(function() {
  log('3')
})

fn1.setNextSuccessor(fn2).setNextSuccessor(fn3)

fn1.passRequest()
