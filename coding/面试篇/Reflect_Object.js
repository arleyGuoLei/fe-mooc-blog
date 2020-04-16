const obj = {
  a: 1
}

Object.defineProperty(obj, 'b', {
  value: 'b',
  enumerable: false
})

const arr = [1, 2, 3, 4]

console.log('log => : Object.keys(obj)', Object.keys(obj)) // [ 'a' ]
console.log('log => : Reflect.ownKeys(obj)', Reflect.ownKeys(obj)) // [ 'a', 'b' ]
console.log('log => : Object.keys(obj)', Object.keys(arr)) // [ '0', '1', '2', '3' ]
console.log('log => : Reflect.ownKeys(obj)', Reflect.ownKeys(arr)) // [ '0', '1', '2', '3', 'length' ]
