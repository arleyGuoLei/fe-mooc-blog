/*
 * @lc app=leetcode.cn id=10 lang=javascript
 *
 * [10] 正则表达式匹配
 *
 * https://leetcode-cn.com/problems/regular-expression-matching/description/
 *
 * algorithms
 * Hard (25.63%)
 * Likes:    879
 * Dislikes: 0
 * Total Accepted:    47.2K
 * Total Submissions: 183.7K
 * Testcase Example:  '"aa"\n"a"'
 *
 * 给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。
 *
 * '.' 匹配任意单个字符
 * '*' 匹配零个或多个前面的那一个元素
 *
 *
 * 所谓匹配，是要涵盖 整个 字符串 s的，而不是部分字符串。
 *
 * 说明:
 *
 *
 * s 可能为空，且只包含从 a-z 的小写字母。
 * p 可能为空，且只包含从 a-z 的小写字母，以及字符 . 和 *。
 *
 *
 * 示例 1:
 *
 * 输入:
 * s = "aa"
 * p = "a"
 * 输出: false
 * 解释: "a" 无法匹配 "aa" 整个字符串。
 *
 *
 * 示例 2:
 *
 * 输入:
 * s = "aa"
 * p = "a*"
 * 输出: true
 * 解释: 因为 '*' 代表可以匹配零个或多个前面的那一个元素, 在这里前面的元素就是 'a'。因此，字符串 "aa" 可被视为 'a' 重复了一次。
 *
 *
 * 示例 3:
 *
 * 输入:
 * s = "ab"
 * p = ".*"
 * 输出: true
 * 解释: ".*" 表示可匹配零个或多个（'*'）任意字符（'.'）。
 *
 *
 * 示例 4:
 *
 * 输入:
 * s = "aab"
 * p = "c*a*b"
 * 输出: true
 * 解释: 因为 '*' 表示零个或多个，这里 'c' 为 0 个, 'a' 被重复一次。因此可以匹配字符串 "aab"。
 *
 *
 * 示例 5:
 *
 * 输入:
 * s = "mississippi"
 * p = "mis*is*p*."
 * 输出: false
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  // 1. 匹配切割表达式
  // mis*is*p*. => [ 'mi', 's*', 'i', 's*', 'p*', '.' ]
  // c*a*b => [ 'c*', 'a*', 'b' ]
  // a.b.c.d. => ['a', '.', 'b', '.', 'c', '.', 'd', '.']
  const re = /([a-z.]\*)|([a-z]+(?=([a-z.]\*?)|$))|([.])/g
  const mode = p.match(re)
  console.log('log => : isMatch -> mode', mode)
  let cur = 0
  const strLen = s.length
  for (let i = 0, len = mode.length, m; i < len; i++) {
    // 模式分类: .*|a*|abcd|.
    m = mode[i].split('')
    // 如果第二位为*
    if (m[1] === '*') {
      if (m[0] === '.') {
        if (mode.length === 1) {
          cur = strLen
          break
        } else {
          // TODO: error, isMatch('ab', '.*c') // error *匹配到何时
        }
      } else {
        while (s[cur] === m[0]) {
          cur++
        }
      }
    } else {
      for (let j = 0, jl = m.length; j < jl; j++) {
        if (m[j] !== s[cur] && m[j] !== '.') {
          return false
        } else {
          cur++
        }
      }
    }
  }
  return strLen === cur
}
// @lc code=end

isMatch('ab', '.*c') // error
