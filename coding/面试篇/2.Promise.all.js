Promise.myAll = (promises) => {
  const promiseResult = []
  return new Promise(function(resolve, reject) {
    let i = 0
    next() // 开始promises数组中的每一个promise加上一个then和catch
    function next() {
      promises[i].then(function(res) {
        promiseResult.push(res) // 存储每次得到的结果
        i++
        if (i === promises.length) { // 如果函数数组中的函数都执行完，便resolve
          resolve(promiseResult)
        } else {
          next() // 执行完一个promise的then, 继续执行下一个promise的then
        }
      }).catch(e => {
        reject(e) // 只要有一个promise到了rejected态，promise.all就reject了
      })
    }
  })
}

const p1 = new Promise(resolve => {
  setTimeout(() => {
    resolve('ajax1: data')
  }, 100)
})

const p2 = new Promise(resolve => {
  setTimeout(() => {
    resolve('ajax2: data')
  }, 200)
})

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('ajax3: err!!')
  }, 300)
})

Promise.all([p1, p2, p3]).then((result) => {
  console.log(result)
}).catch((error) => {
  console.log('Promise.all - error')
  console.log(error)
})

Promise.myAll([p1, p2, p3]).then((result) => {
  console.log(result)
}).catch((error) => {
  console.log('Promise.myAll - error')
  console.log(error)
})
