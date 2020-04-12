/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 *
 * https://leetcode-cn.com/problems/climbing-stairs/description/
 *
 * algorithms
 * Easy (47.54%)
 * Likes:    930
 * Dislikes: 0
 * Total Accepted:    168.8K
 * Total Submissions: 349.7K
 * Testcase Example:  '2'
 *
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 *
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 *
 * 注意：给定 n 是一个正整数。
 *
 * 示例 1：
 *
 * 输入： 2
 * 输出： 2
 * 解释： 有两种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶
 * 2.  2 阶
 *
 * 示例 2：
 *
 * 输入： 3
 * 输出： 3
 * 解释： 有三种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶 + 1 阶
 * 2.  1 阶 + 2 阶
 * 3.  2 阶 + 1 阶
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  const map = {}
  function getMap(n) {
    return map[n]
  }
  function setMap(n, val) {
    map[n] = val
    return val
  }
  function walk(n) {
    const number = getMap(n)
    if (typeof number !== 'undefined') {
      return number
    }

    if (n === 2 || n === 1) {
      return setMap(n, n)
    }
    const N1 = walk(n - 1)
    const N2 = walk(n - 2)
    return setMap(n - 1, N1) + setMap(n - 2, N2)
  }
  return walk(n)
}
// @lc code=end

