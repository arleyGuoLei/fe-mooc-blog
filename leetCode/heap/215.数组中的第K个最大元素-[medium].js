/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 *
 * https://leetcode-cn.com/problems/kth-largest-element-in-an-array/description/
 *
 * algorithms
 * Medium (60.36%)
 * Likes:    424
 * Dislikes: 0
 * Total Accepted:    101.7K
 * Total Submissions: 164.4K
 * Testcase Example:  '[3,2,1,5,6,4]\n2'
 *
 * 在未排序的数组中找到第 k 个最大的元素。请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
 *
 * 示例 1:
 *
 * 输入: [3,2,1,5,6,4] 和 k = 2
 * 输出: 5
 *
 *
 * 示例 2:
 *
 * 输入: [3,2,3,1,2,4,5,5,6] 和 k = 4
 * 输出: 4
 *
 * 说明:
 *
 * 你可以假设 k 总是有效的，且 1 ≤ k ≤ 数组的长度。
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  for (let i = nums.length, tmp; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (nums[j + 1] < nums[j]) {
        tmp = nums[j + 1]
        nums[j + 1] = nums[j]
        nums[j] = tmp
      }
    }
    if (nums.length - i === k - 1) {
      return nums[i - 1]
    }
  }
  return 0
}
// @lc code=end

console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4))
