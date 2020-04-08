const foo = (...args) => { // 剩余参数变成一个数组
  console.log(args) // [ 1, 2, 3, 4, 5 ]
  console.log(...args) // 1, 2, 3, 4, 5
}

foo(1, 2, 3, 4, 5)

const foo2 = (one, ...args) => {
  console.log(one) // 1
  console.log(args) // [ 2, 3, 4, 5 ]
  console.log(...args) // 2, 3, 4, 5
}

foo2(1, 2, 3, 4, 5)
