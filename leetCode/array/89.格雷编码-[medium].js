/*
 * @lc app=leetcode.cn id=89 lang=javascript
 *
 * [89] 格雷编码
 *
 * https://leetcode-cn.com/problems/gray-code/description/
 *
 * algorithms
 * Medium (67.24%)
 * Likes:    115
 * Dislikes: 0
 * Total Accepted:    16.8K
 * Total Submissions: 25K
 * Testcase Example:  '2'
 *
 * 格雷编码是一个二进制数字系统，在该系统中，两个连续的数值仅有一个位数的差异。
 *
 * 给定一个代表编码总位数的非负整数 n，打印其格雷编码序列。格雷编码序列必须以 0 开头。
 *
 * 示例 1:
 *
 * 输入: 2
 * 输出: [0,1,3,2]
 * 解释:
 * 00 - 0
 * 01 - 1
 * 11 - 3
 * 10 - 2
 *
 * 对于给定的 n，其格雷编码序列并不唯一。
 * 例如，[0,2,3,1] 也是一个有效的格雷编码序列。
 *
 * 00 - 0
 * 10 - 2
 * 11 - 3
 * 01 - 1
 *
 * 示例 2:
 *
 * 输入: 0
 * 输出: [0]
 * 解释: 我们定义格雷编码序列必须以 0 开头。
 * 给定编码总位数为 n 的格雷编码序列，其长度为 2^n。当 n = 0 时，长度为 2^0 = 1。
 * 因此，当 n = 0 时，其格雷编码序列为 [0]。
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
  const make = function(m) {
    if (m === 1) {
      return ['0', '1']
    } else if (m === 0) {
      return ['0']
    }
    const prev = make(m - 1)
    const len = Math.pow(2, m)
    const res = []
    for (let i = 0; i < len / 2; i++) {
      res[i] = `0${prev[i]}`
      res[len - i - 1] = `1${prev[i]}`
    }
    return res
  }

  return make(n).map(binary => (parseInt(binary, 2)))
}
// @lc code=end

// parseInt(num, 8) // 八进制转十进制
// parseInt(num, 16) // 十六进制转十进制
// parseInt(num).toString(8) // 十进制转八进制
// parseInt(num).toString(16) // 十进制转十六进制
// parseInt(num, 2).toString(8) // 二进制转八进制
// parseInt(num, 2).toString(16) // 二进制转十六进制
// parseInt(num, 8).toString(2) // 八进制转二进制
// parseInt(num, 8).toString(16) // 八进制转十六进制
// parseInt(num, 16).toString(2) // 十六进制转二进制
// parseInt(num, 16).toString(8) // 十六进制转八进制
