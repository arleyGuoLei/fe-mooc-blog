// 环形队列
// 1. 队尾插入，对头删除
class Queue {
  constructor(arr = [], max) {
    this.queue = arr
    this.head = 0
    this.tail = arr.length
    this.max = max
  }

  insert(item) {
    if (this.tail === this.max && this.head === 0) {
      return false
    }
    if (this.tail < this.max) {
      this.queue[this.tail] = item
      this.tail++
    }
    if (this.tail === this.max && this.head !== 0) {
      this.tail = 0
      this.queue[this.tail] = item
    }
    return true
  }

  delete() {
    const item = this.queue.shift()
    this.head++
    return item
  }

  show() {
    console.log(this)
  }
}

const queue = new Queue([1], 3)
queue.insert(2)
queue.insert(3)
queue.delete()
