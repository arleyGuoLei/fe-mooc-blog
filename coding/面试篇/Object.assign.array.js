// 一维数组
const a = [0, 1]
// const a1 = Object.assign([], a)
const a2 = [...a]
// a1[0] = 99
a2[0] = 99
console.log(a) // [0, 1]

// 二维数组
const b = [[0], [1]]
const b1 = Object.assign([], b)
b1[0][0] = 99
console.log(b) // [ [ 99 ], [ 1 ] ]

// 对象数组
const c = [{ id: 0 }]
const c1 = Object.assign([], c)
c1[0].id = 99
console.log(c) // [ { id: 99 } ]

// Array.prototype.slice

