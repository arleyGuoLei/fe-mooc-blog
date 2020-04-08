/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 *
 * https://leetcode-cn.com/problems/spiral-matrix/description/
 *
 * algorithms
 * Medium (38.17%)
 * Likes:    336
 * Dislikes: 0
 * Total Accepted:    50.9K
 * Total Submissions: 129.2K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * 给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。
 *
 * 示例 1:
 *
 * 输入:
 * [
 * ⁠[ 1, 2, 3 ],
 * ⁠[ 4, 5, 6 ],
 * ⁠[ 7, 8, 9 ]
 * ]
 * 输出: [1,2,3,6,9,8,7,4,5]
 *
 *
 * 示例 2:
 *
 * 输入:
 * [
 * ⁠ [1, 2, 3, 4],
 * ⁠ [5, 6, 7, 8],
 * ⁠ [9,10,11,12]
 * ]
 * 输出: [1,2,3,4,8,12,11,10,9,5,6,7]
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  const map = (arr, r = []) => {
    for (let i = 0, len = arr.length; i < len; i++) {
      if (i === 0) {
        r = r.concat(arr[i]) // 先来第一行
      } else if (i === len - 1) {
        r = r.concat(arr[i].reverse()) // 最后一行翻转
      } else {
        if (arr[i].length !== 0) { r.push(arr[i].pop()) } // 最右边一列弹出 push
      }
    }
    arr.pop()
    arr.shift()
    // 第一行 最右边一列 最后一行，都有了，我们再来复制最左边一列
    for (let j = arr.length - 1; j >= 0; j--) {
      if (arr[j].length !== 0) { r.push(arr[j].shift()) }
    }
    if (arr.length !== 0) {
      return map(arr, r) // 上右下左 一圈一圈的递归
    }
    return r
  }

  return map(matrix)
}
// @lc code=end

console.log(spiralOrder([[1], [2], [3], [4], [5], [6], [7], [8], [9], [10]]))
