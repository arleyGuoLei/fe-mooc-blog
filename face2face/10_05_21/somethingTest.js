// 111111111111

// 函数柯里化指的是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。
function curry3(fn) {
  const l = fn.length
  const argArr = []
  return function inner(arg) {
    argArr.push(arg)

    if (argArr.length === l) {
      return fn.apply(null, argArr)
    } else {
      return inner
    }
  }
}

function curry2(fn) {
  return function(a) {
    return function(b) {
      fn.call(null, a, b)
    }
  }
}

function sum(a, b) {
  return a + b
}
const curriedSum = curry2(sum)

// curriedSum(1) // fn
// fn(2)

alert(curriedSum(1)(2)) // 3

// 反柯里化
Function.prototype.uncurrying = function() {
  return function() {

  }
}
const push = Array.prototype.push.uncurrying()
const obj = {}
push(obj, 'first')

// 22222222222222222

function isMatch(str) {
  // 堆栈 先进后出
  const arr = str.split('')
  const stack = []
  for (let i = 0; i <= arr.length; i++) {
    const s = arr[i];
    if (s.indexOf('([{') !== -1) {
        stack.push(s)
    } else if (s.indexOf(')]}') !== -1) {
      const map = {
        '(': ')',
        '[': ']',
        '{': '}'
      }
    const endStr = stack[stack.length - 1]
      if (map(endStr) === s) {
      stack.pop()
    } else {
      return false
    }
  }

  return stack.length === 0
}

let str1 = '(a+b]){(c)[{e}]}()'
console.log(isMatch(str1)) // true

str1 = str1 + ']'
console.log(isMatch(str1)) // false

// 3333333333

function mySetInterVal(fn, a, b, ...args) {
  let num = 0;
  if (typeof args[0] !== 'undefined') {
    num = args[0];
  }

  let timeout = a + num * b;

  const clearTimer = setTimeout(() => {
      num++;
      fn();
      return mySetInterVal(fn, a, b, num);
  }, timeout);

  return () => {
     clearTimeout(clearTimer); // 返回的值不对
  };
}

// 1000 + 0 * 2000
// 1000 + 1 * 2000
// 1000 + 2 * 2000


const clearTime = mySetInterVal(fn, 1000, 2000);
clearTime();