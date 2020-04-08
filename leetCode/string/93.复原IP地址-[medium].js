/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原IP地址
 *
 * https://leetcode-cn.com/problems/restore-ip-addresses/description/
 *
 * algorithms
 * Medium (45.33%)
 * Likes:    229
 * Dislikes: 0
 * Total Accepted:    35K
 * Total Submissions: 75.5K
 * Testcase Example:  '"25525511135"'
 *
 * 给定一个只包含数字的字符串，复原它并返回所有可能的 IP 地址格式。
 *
 * 示例:
 *
 * 输入: "25525511135"
 * 输出: ["255.255.11.135", "255.255.111.35"]
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(str) {
  // 保存所有符合条件的IP地址
  const r = []
  // 分四步递归处理ip分段
  const search = (cur, sub) => {
    if (str.length > 12) { return }
    if (cur.length === 4 && cur.join('') === str) {
      r.push(cur.join('.'))
    }
    const min = Math.min(sub.length, 3)
    for (let i = 0; i < min; i++) {
      const s = sub.substr(0, i + 1)
      if (s - 256 < 0) {
        search(cur.concat([s * 1]), sub.substr(i + 1))
      }
    }
  }
  search([], str)
  return r
}
// @lc code=end

