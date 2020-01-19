/*
 * @lc app=leetcode.cn id=605 lang=javascript
 *
 * [605] 种花问题
 *
 * https://leetcode-cn.com/problems/can-place-flowers/description/
 *
 * algorithms
 * Easy (30.66%)
 * Likes:    101
 * Dislikes: 0
 * Total Accepted:    15K
 * Total Submissions: 48.6K
 * Testcase Example:  '[1,0,0,0,1]\n1'
 *
 * 假设你有一个很长的花坛，一部分地块种植了花，另一部分却没有。可是，花卉不能种植在相邻的地块上，它们会争夺水源，两者都会死去。
 *
 * 给定一个花坛（表示为一个数组包含0和1，其中0表示没种植花，1表示种植了花），和一个数 n 。能否在不打破种植规则的情况下种入 n
 * 朵花？能则返回True，不能则返回False。
 *
 * 示例 1:
 *
 *
 * 输入: flowerbed = [1,0,0,0,1], n = 1
 * 输出: True
 *
 *
 * 示例 2:
 *
 *
 * 输入: flowerbed = [1,0,0,0,1], n = 2
 * 输出: False
 *
 *
 * 注意:
 *
 *
 * 数组内已种好的花不会违反种植规则。
 * 输入的数组长度范围为 [1, 20000]。
 * n 是非负整数，且不会超过输入数组的大小。
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  let max = 0
  for (let i = 0, len = flowerbed.length - 1; i <= len; i++) {
    if (flowerbed[i] === 0) {
      if ((i === 0 && flowerbed[1] === 0) || // 第一个没有种花， 且第一个也没有种花
        (i === 0 && len === 0) || // 第一个没有种花，且只有一个花位
        (i === len && flowerbed[len - 1] === 0) // 最后一个没有种花， 且倒数第二个没有种花
      ) {
        max++
        i++ // i++ 用于排除当前种花了的位置
      } else if (flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) { // 不是第一个和最后一个位置的边界情况，且前一个和后一个都没有种花
        max++
        i++
      }
    }
  }
  return max >= n
}
// @lc code=end
