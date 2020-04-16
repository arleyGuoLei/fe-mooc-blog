// 实现该函数，start()后等1秒输出1，再等2秒2，再等3秒3.

function Queue() {
  this.queue = []
}

Queue.prototype.task = function(time, fn) {
  this.queue.push({
    time,
    fn
  })
  return this
}
Queue.prototype.start = function() {
  let i = 0
  const last = this.queue.length - 1
  function start() {
    setTimeout(() => {
      this.queue[i].fn()
      i++
      if (i <= last) {
        start.call(this)
      }
    }, this.queue[i].time)
  }
  if (last > 0) {
    start.call(this)
  }
}

new Queue()
  .task(1000, () => console.log(1))
  .task(2000, () => console.log(2))
  .task(3000, () => console.log(3))
  .start()

