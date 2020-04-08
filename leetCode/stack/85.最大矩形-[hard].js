/*
 * @lc app=leetcode.cn id=85 lang=javascript
 *
 * [85] 最大矩形
 *
 * https://leetcode-cn.com/problems/maximal-rectangle/description/
 *
 * algorithms
 * Hard (43.60%)
 * Likes:    374
 * Dislikes: 0
 * Total Accepted:    23.6K
 * Total Submissions: 52.2K
 * Testcase Example:  '[["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]'
 *
 * 给定一个仅包含 0 和 1 的二维二进制矩阵，找出只包含 1 的最大矩形，并返回其面积。
 *
 * 示例:
 *
 * 输入:
 * [
 * ⁠ ["1","0","1","0","0"],
 * ⁠ ["1","0","1","1","1"],
 * ⁠ ["1","1","1","1","1"],
 * ⁠ ["1","0","0","1","0"]
 * ]
 * 输出: 6
 *
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
  const re = /1{2,}/g
  const stack = matrix.map(item => {
    const arr = []
    const str = item.join('')
    let r = re.exec(str)
    while (r) {
      arr.push([r.index, r.index + r[0].length - 1])
      r = re.exec(str)
    }
    return arr
  })
  return stack
}
// @lc code=end

console.log(maximalRectangle([
  ['1', '0', '1', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '1', '1'],
  ['1', '0', '1', '1', '1']
]))
