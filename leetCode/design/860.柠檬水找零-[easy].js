/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 *
 * https://leetcode-cn.com/problems/lemonade-change/description/
 *
 * algorithms
 * Easy (53.44%)
 * Likes:    103
 * Dislikes: 0
 * Total Accepted:    19.3K
 * Total Submissions: 35.4K
 * Testcase Example:  '[5,5,5,10,20]'
 *
 * 在柠檬水摊上，每一杯柠檬水的售价为 5 美元。
 *
 * 顾客排队购买你的产品，（按账单 bills 支付的顺序）一次购买一杯。
 *
 * 每位顾客只买一杯柠檬水，然后向你付 5 美元、10 美元或 20 美元。你必须给每个顾客正确找零，也就是说净交易是每位顾客向你支付 5 美元。
 *
 * 注意，一开始你手头没有任何零钱。
 *
 * 如果你能给每位顾客正确找零，返回 true ，否则返回 false 。
 *
 * 示例 1：
 *
 * 输入：[5,5,5,10,20]
 * 输出：true
 * 解释：
 * 前 3 位顾客那里，我们按顺序收取 3 张 5 美元的钞票。
 * 第 4 位顾客那里，我们收取一张 10 美元的钞票，并返还 5 美元。
 * 第 5 位顾客那里，我们找还一张 10 美元的钞票和一张 5 美元的钞票。
 * 由于所有客户都得到了正确的找零，所以我们输出 true。
 *
 *
 * 示例 2：
 *
 * 输入：[5,5,10]
 * 输出：true
 *
 *
 * 示例 3：
 *
 * 输入：[10,10]
 * 输出：false
 *
 *
 * 示例 4：
 *
 * 输入：[5,5,10,10,20]
 * 输出：false
 * 解释：
 * 前 2 位顾客那里，我们按顺序收取 2 张 5 美元的钞票。
 * 对于接下来的 2 位顾客，我们收取一张 10 美元的钞票，然后返还 5 美元。
 * 对于最后一位顾客，我们无法退回 15 美元，因为我们现在只有两张 10 美元的钞票。
 * 由于不是每位顾客都得到了正确的找零，所以答案是 false。
 *
 *
 *
 *
 * 提示：
 *
 *
 * 0 <= bills.length <= 10000
 * bills[i] 不是 5 就是 10 或是 20
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  const hand = [] // 我目前有的钱
  while (bills.length !== 0) { // 当还有顾客
    const money = bills.shift() // 当前顾客给的钱
    if (money === 5) { // 顾客正好给了5元
      hand.push(money) // 直接把钱放进收钱箱
    } else {
      hand.sort((a, b) => b - a) // 顾客给的不是5元，把钱进行排序，先用大钱找零

      let change = money - 5 // 需要找给顾客的零钱
      for (let i = 0, len = hand.length; i < len; i++) { // 遍历钱箱里所有的钱
        if (change >= hand[i]) { // 要找的钱大于或等于现在箱子里拿出来的这张钱(大到小)
          change -= hand[i] // 先找零一张
          hand.splice(i, 1) // 钱箱子里找零后的这张钱就没了
          i--
        }
        if (change === 0) { // 找零成功了
          hand.push(money) // 顾客给的钱放进钱箱
          break // 结束这个顾客的找零
        }
      }

      if (change !== 0) { return false } // 如果结束找零了，顾客需要找零的钱还不是0，找零失败
    }
  }
  return true
}
// @lc code=end

