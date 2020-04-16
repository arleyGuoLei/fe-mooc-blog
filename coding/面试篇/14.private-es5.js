function People(name, idCard, age) {
  Object.defineProperty(this, '_idCard', { // 私有
    value: idCard,
    enumerable: false,
    writable: true,
    configurable: true
  })
  this[Symbol('_age')] = age // 私有
  this.name = name // 非私有
}
const p1 = new People('arley', 123456, 18)
p1.name
p1._age
console.log('log => : p1', p1) //  { name: 'arley', [Symbol(_age)]: 18 }
console.log('log => : p1.name', p1.name)
console.log('log => : p1._age', p1._age)
