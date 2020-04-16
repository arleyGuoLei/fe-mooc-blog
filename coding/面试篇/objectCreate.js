const obj = {
  a: 'a'
}

const obj2 = Object.create(obj, { // obj在__proto__上
  b: {
    value: 'b',
    enumerable: true,
    configurable: true,
    writable: true
  }
})

console.log(obj2)// { b: 'b' }
