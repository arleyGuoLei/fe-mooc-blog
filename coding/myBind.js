
// eslint-disable-next-line no-extend-native
Function.prototype.myBind = function(context, ...args) {
  if (typeof this !== 'function') {
    return new TypeError('is not a function')
  }
  const fn = Symbol('fn')
  context[fn] = this

  return function() {
    if (this instanceof Function) {
      return new context[fn](...args, ...arguments)
    } else {
      return context[fn].call(this, ...args, ...arguments)
    }
  }
}
// new

function foo() {

}

foo.myBind()
