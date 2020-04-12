const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function MyPromise(fn) {
  this.state = PENDING // 一开始 Promise 的状态应该是 pending
  this.value = null // value 变量用于保存 resolve 或者 reject 中传入的值

  this.resolvedCallbacks = []
  this.rejectedCallbacks = []

  function resolve(value) {
    if (this.state === PENDING) {
      this.state = RESOLVED
      this.value = value
      this.resolvedCallbacks.map(cb => cb(this.value))// 发布
    }
  }

  function reject(value) {
    if (this.state === PENDING) {
      this.state = REJECTED
      this.value = value
      this.rejectedCallbacks.map(cb => cb(this.value))// 发布
    }
  }

  try {
    fn(resolve.bind(this), reject.bind(this)) // 传入promise构造函数的参数(传入函数)
  } catch (e) {
    reject.bind(this)(e)
  }
}

MyPromise.prototype.then = function(onFulfilled, onRejected) {
  onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
  onRejected = typeof onRejected === 'function' ? onRejected : r => { throw r }
  if (this.state === PENDING) {
    // then: 订阅，将then传入的函数保存到构造函数中声明的数组中，当执行resolve, reject的时候循环执行then函数传入的函数
    this.resolvedCallbacks.push(onFulfilled)
    this.rejectedCallbacks.push(onRejected)
  }
}

new MyPromise((resolve, reject) => {
  console.log('start1')
  setTimeout(() => {
    resolve(1)
  }, 100)
}).then(value => {
  console.log(value)
})

new MyPromise((resolve, reject) => {
  console.log('start2')
  setTimeout(() => {
    reject(2)
  }, 100)
}).then(value => {
  console.log(value)
}, err => {
  console.log('err:' + err)
})
