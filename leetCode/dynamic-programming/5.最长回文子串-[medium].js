/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 *
 * https://leetcode-cn.com/problems/longest-palindromic-substring/description/
 *
 * algorithms
 * Medium (28.09%)
 * Likes:    1996
 * Dislikes: 0
 * Total Accepted:    230K
 * Total Submissions: 784.8K
 * Testcase Example:  '"babad"'
 *
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 *
 * 示例 1：
 *
 * 输入: "babad"
 * 输出: "bab"
 * 注意: "aba" 也是一个有效答案。
 *
 *
 * 示例 2：
 *
 * 输入: "cbbd"
 * 输出: "bb"
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  const n = s.length // n为初始字符串长度
  let res = ''
  const dp = Array.from(new Array(n), () => new Array(n).fill(0)) // 二维数组 dp[i][j] 字符串s从索引i到j的子串是否是回文串
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i; j < n; j++) {
      // s[i] === s[j]：说明当前中心可以继续扩张，进而有可能扩大回文串的长度
      // j - i < 2：意即子串是一个长度为0或1的回文串
      dp[i][j] = s[i] === s[j] && (j - i < 2 || dp[i + 1][j - 1])
      if (dp[i][j] && j - i + 1 > res.length) {
        res = s.substring(i, j + 1)
      }
    }
  }
  return res
}
// @lc code=end

longestPalindrome('babad')
