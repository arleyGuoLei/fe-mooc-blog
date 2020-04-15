
// eslint-disable-next-line no-extend-native
Function.prototype.myBind = function(context, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  const fn = Symbol('fn')
  context[fn] = this
  return function F() {
    if (this instanceof F) {
      return new context[fn](...args, ...arguments)
    } else {
      return context[fn](args.concat(arguments))
    }
  }
}

function foo(name) {
  this.name = name
}

foo.prototype.callName = function() {
  console.log(this.name)
}

const obj = {
  name: 'hello'
}
const Fn = foo.myBind(obj)

const f1 = new Fn('arley')
f1.callName()

