/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 *
 * https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/description/
 *
 * algorithms
 * Medium (52.01%)
 * Likes:    546
 * Dislikes: 0
 * Total Accepted:    70.2K
 * Total Submissions: 134.8K
 * Testcase Example:  '"23"'
 *
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
 *
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 *
 *
 *
 * 示例:
 *
 * 输入："23"
 * 输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 *
 *
 * 说明:
 * 尽管上面的答案是按字典序排列的，但是你可以任意选择答案输出的顺序。
 *
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  // 1. 建立数字和字母的映射
  const map = new Map([
    [2, 'abc'],
    [3, 'def'],
    [4, 'ghi'],
    [5, 'jkl'],
    [6, 'mno'],
    [7, 'pqrs'],
    [8, 'tuv'],
    [9, 'wxyz']
  ])
  // 2. 把输入的字符串分割成数组 234 => [2, 3, 4]
  const nums = digits.split('').map(str => Number(str))
  // 3. 整数型数组转键盘字母映射数组 [2, 3, 4] => ['abc', 'def', 'ghi]
  const strs = nums.map(num => (map.get(num)))

  const combinations = function(arr) {
    const tmp = []
    for (const wordA of (arr[0] ? arr[0] : [])) {
      for (const wordB of (arr[1] ? arr[1] : [''])) {
        tmp.push(`${wordA}${wordB}`)
      }
    }
    arr.splice(0, 2, tmp) // 删除前两项，在开头增加tmp数组作为0项
    if (arr.length === 1) {
      return arr[0]
    }
    return combinations([...arr])
  }
  return combinations([...strs])
}
// @lc code=end
