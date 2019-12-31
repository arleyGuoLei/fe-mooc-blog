/*
 * @lc app=leetcode.cn id=557 lang=javascript
 *
 * [557] 反转字符串中的单词 III
 *
 * https://leetcode-cn.com/problems/reverse-words-in-a-string-iii/description/
 *
 * algorithms
 * Easy (68.22%)
 * Likes:    125
 * Dislikes: 0
 * Total Accepted:    32.1K
 * Total Submissions: 47K
 * Testcase Example:  '"Let\'s take LeetCode contest"'
 *
 * 给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。
 *
 * 示例 1:
 *
 *
 * 输入: "Let's take LeetCode contest"
 * 输出: "s'teL ekat edoCteeL tsetnoc"
 *
 *
 * 注意：在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  // s.match(/\w+/)
}
// @lc code=end

/**
 * 方法一  beats 84.65%
 * @param {string} s
 * @return {string}
 */
var reverseWordsA = function(s) {
  return s.split(' ').map(word => (word.split('').reverse().join(''))).join(' ')
}

/**
 * 方法二 beats 93.47%
 * @param {string} s
 * @return {string}
 */
var reverseWordsB = function(s) {
  return s.split(' ').reduce((str, word) => {
    return `${str} ${word.split('').reverse().join('')}`
  }, '').substring(1)
}

export default {
  reverseWordsA,
  reverseWordsB
}

