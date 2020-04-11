const obj1 = {
  a: 1,
  b: 2
}

const obj2 = Object.create(obj1, {
  c: {
    value: 3,
    enumerable: false, // true
    writable: true,
    configurable: true
  }
})
console.log('log => : obj2', obj2)
console.log('log => : obj2', obj2.a)
console.log('log => : obj2', obj2.c)
console.log(Object.getOwnPropertyNames(obj2))
