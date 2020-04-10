/**
 * 构建二叉搜索树
 */

class Node {
  constructor(val) {
    this.val = val
    this.left = this.right = null
  }
}

class SearchBTree {
  constructor(data) {
    if (data.length === 0) { return null }
    const root = new Node(data.shift())
    data.forEach(item => {
      this.insert(root, item)
    })
    return root
  }

  insert(node, val) {
    if (val < node.val) {
      if (!node.left) {
        node.left = new Node(val)
      } else {
        this.insert(node.left, val)
      }
    } else {
      if (!node.right) {
        node.right = new Node(val)
      } else {
        this.insert(node.right, val)
      }
    }
  }
}

const tree = new SearchBTree([10, 5, 15, 6, 20])
console.log(tree)

module.exports = {
  SearchBTree
}
