/*
 * @lc app=leetcode.cn id=787 lang=javascript
 *
 * [787] K 站中转内最便宜的航班
 *
 * https://leetcode-cn.com/problems/cheapest-flights-within-k-stops/description/
 *
 * algorithms
 * Medium (34.97%)
 * Likes:    83
 * Dislikes: 0
 * Total Accepted:    5.1K
 * Total Submissions: 14.6K
 * Testcase Example:  '3\n[[0,1,100],[1,2,100],[0,2,500]]\n0\n2\n1'
 *
 * 有 n 个城市通过 m 个航班连接。每个航班都从城市 u 开始，以价格 w 抵达 v。
 *
 * 现在给定所有的城市和航班，以及出发城市 src 和目的地 dst，你的任务是找到从 src 到 dst 最多经过 k 站中转的最便宜的价格。
 * 如果没有这样的路线，则输出 -1。
 *
 *
 *
 * 示例 1：
 *
 * 输入:
 * n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]]
 * src = 0, dst = 2, k = 1
 * 输出: 200
 * 解释:
 * 城市航班图如下
 *
 *
 * 从城市 0 到城市 2 在 1 站中转以内的最便宜价格是 200，如图中红色所示。
 *
 * 示例 2：
 *
 * 输入:
 * n = 3, edges = [[0,1,100],[1,2,100],[0,2,500]]
 * src = 0, dst = 2, k = 0
 * 输出: 500
 * 解释:
 * 城市航班图如下
 *
 *
 * 从城市 0 到城市 2 在 0 站中转以内的最便宜价格是 500，如图中蓝色所示。
 *
 *
 *
 * 提示：
 *
 *
 * n 范围是 [1, 100]，城市标签从 0 到 n - 1.
 * 航班数量范围是 [0, n * (n - 1) / 2].
 * 每个航班的格式 (src, dst, price).
 * 每个航班的价格范围是 [1, 10000].
 * k 范围是 [0, n - 1].
 * 航班没有重复，且不存在环路
 *
 *
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, K) {
  const cheap = (flights, src, dst, k) => {
    const prev = flights.filter(f => f[1] === dst) // 所有能到达该城市的航班
    const min = Math.min.apply(null, prev.map(item => {
      if (item[0] === src && k > -1) { // 已经到达了起始站，说明符合（边界）
        return item[2]
      } else if (k === 0 && item[0] !== src) { // 如果已经超过了中转次数（边界2）
        return Number.MAX_SAFE_INTEGER // 返回一个超大值(技巧)
      } else {
        return item[2] + cheap(flights, src, item[0], k - 1) // 状态转移方程
      }
    }))
    return min
  }
  const min = cheap(flights, src, dst, K)
  return min >= Number.MAX_SAFE_INTEGER ? -1 : min
}
// @lc code=end

