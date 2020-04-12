function create() {
  const obj = {}
  const Con = [].shift.call(arguments)
  obj.__proto__ = Con.prototype
  const result = Con.apply(obj, arguments)
  return result instanceof Object ? result : obj
}

function foo() {
  this.name = 'arley'
}

function foo2() {
  return {
    name: 'fe',
    age: 19
  }
}
const s1 = create(foo)
const s2 = create(foo2)

console.log('log => : s1', s1)
console.log('log => : s2', s2)
