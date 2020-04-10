// 构造完全二叉树

class Node {
  constructor(val) {
    this.val = val
    this.left = this.right = null
  }
}

class Tree {
  constructor(data) {
    const nodeList = []
    for (let i = 0, len = data.length; i < len; i++) {
      const node = new Node(data[i])
      nodeList.push(node)
      if (i > 0) {
        // 计算当前节点属于哪一层
        const n = Math.floor(Math.log2(i + 1))
        // 记录当前层的起始点
        const q = Math.pow(2, n) - 1
        // 记录上一层的起始点
        const p = Math.pow(2, n - 1) - 1

        // parentIndex = 父节点层起始点 + 向下取整( (当前节点Index - 当前节点层起始点) /2 )

        // 父节点层起始点 = 2^(当前节点所在层-1) - 1

        // 当前节点层起始点 = 2^(当前节点所在层) - 1

        // 当前节点所在层 = 向下取整(log2(i + 1))

        // 找到当前节点的父节点
        const parent = nodeList[p + Math.floor((i - q) / 2)]
        // 将当前节点和上一层的父节点做关联
        if (parent.left) {
          parent.right = node
        } else {
          parent.left = node
        }
      }
    }
    const root = nodeList.shift()
    nodeList.length = 0
    return root
  }
}

// const t = new Tree([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
// console.log(t)

module.exports = {
  Tree
}
