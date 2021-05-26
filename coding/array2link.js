class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class Link {
  constructor(arr) {
    const head = new Node(arr.shift())
    let next = head
    arr.forEach(val => {
      next.next = new Node(val)
      next = next.next
    })

    return head
  }

  static toArray(list) {
    const arr = []
    while (list) {
      arr.push(list.val)
      list = list.next
    }
    return arr
  }
}

const arr = [1, 2, 3, 4]
const link = new Link(arr)
console.log(link)

const linkArr = Link.toArray(link)
console.log(linkArr)
