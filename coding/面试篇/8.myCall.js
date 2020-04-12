// eslint-disable-next-line no-extend-native
Function.prototype.myCall = function(context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  context = context || window
  const fn = Symbol('fn')
  context[fn] = this
  const args = [...arguments].slice(1)
  const result = context[fn](...args)
  delete context[fn]
  return result
}

const obj = {
  name: 'arley'
}

function foo(str) {
  console.log(str + this.name)
}

foo.myCall(obj, 'hello: ')
