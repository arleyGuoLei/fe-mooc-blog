// 获取堆栈中的最小值

class Stack {
  constructor() {
    this.list = []
    this.minStack = []
  }

  push(number) {
    this.list.push(number)

    if (this.minStack.length > 0) {
      this.minStack.push(Math.min(this.minStack[this.minStack.length - 1], number))
    } else {
      this.minStack.push(number)
    }
  }

  pop() {
    this.list.pop()
    this.minStack.pop()
  }

  getMin() {
    return this.minStack[this.minStack.length - 1]
  }
}

const list = new Stack()
list.push(4)
list.push(1)
console.log(list.getMin()) // 1
list.pop()
list.push(2)
console.log(list.getMin()) // 2
list.push(3)
console.log(list.getMin()) // 2
