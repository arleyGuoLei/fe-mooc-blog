/*
 * @lc app=leetcode.cn id=226 lang=javascript
 *
 * [226] 翻转二叉树
 *
 * https://leetcode-cn.com/problems/invert-binary-tree/description/
 *
 * algorithms
 * Easy (73.19%)
 * Likes:    403
 * Dislikes: 0
 * Total Accepted:    68.2K
 * Total Submissions: 91.3K
 * Testcase Example:  '[4,2,7,1,3,6,9]'
 *
 * 翻转一棵二叉树。
 *
 * 示例：
 *
 * 输入：
 *
 * ⁠    4
 * ⁠  /   \
 * ⁠ 2     7
 * ⁠/ \   / \
 * 1   3 6   9
 *
 * 输出：
 *
 * ⁠    4
 * ⁠  /   \
 * ⁠ 7     2
 * ⁠/ \   / \
 * 9   6 3   1
 *
 * 备注:
 * 这个问题是受到 Max Howell 的 原问题 启发的 ：
 *
 * 谷歌：我们90％的工程师使用您编写的软件(Homebrew)，但是您却无法在面试时在白板上写出翻转二叉树这道题，这太糟糕了。
 *
 */
const { Tree } = require('./tree')
// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
  if (root === null) {
    return null
  }
  const right = invertTree(root.right)
  const left = invertTree(root.left)
  root.left = right
  root.right = left
  return root
}
// @lc code=end

const tree = new Tree([1, 2])
console.log('log => : tree', tree)
const invert = invertTree(tree)
console.log('log => : invert', invert)
