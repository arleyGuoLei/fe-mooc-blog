/*
 * @lc app=leetcode.cn id=621 lang=javascript
 *
 * [621] 任务调度器
 *
 * https://leetcode-cn.com/problems/task-scheduler/description/
 *
 * algorithms
 * Medium (46.82%)
 * Likes:    238
 * Dislikes: 0
 * Total Accepted:    18.5K
 * Total Submissions: 38.4K
 * Testcase Example:  '["A","A","A","B","B","B"]\n2'
 *
 * 给定一个用字符数组表示的 CPU 需要执行的任务列表。其中包含使用大写的 A - Z 字母表示的26
 * 种不同种类的任务。任务可以以任意顺序执行，并且每个任务都可以在 1 个单位时间内执行完。CPU
 * 在任何一个单位时间内都可以执行一个任务，或者在待命状态。
 *
 * 然而，两个相同种类的任务之间必须有长度为 n 的冷却时间，因此至少有连续 n 个单位时间内 CPU 在执行不同的任务，或者在待命状态。
 *
 * 你需要计算完成所有任务所需要的最短时间。
 *
 *
 *
 * 示例 ：
 *
 * 输入：tasks = ["A","A","A","B","B","B"], n = 2
 * 输出：8
 * 解释：A -> B -> (待命) -> A -> B -> (待命) -> A -> B.
 *
 *
 *
 *
 * 提示：
 *
 *
 * 任务的总个数为 [1, 10000]。
 * n 的取值范围为 [0, 100]。
 *
 *
 */

// @lc code=start
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
  const o = {}
  tasks.forEach(key => {
    if (o[key]) {
      o[key] += 1
    } else {
      o[key] = 1
    }
  })
  const Q = []
  while (1) {
    const keys = Object.keys(o)
    const q = []
    if (keys.length === 0) { break }
    keys.sort((a, b) => o[b] - o[a]) // 大到小排序，先执行任务数目较多的任务
    for (let i = 0; i <= n; i++) {
      const fkey = keys.shift()
      if (typeof fkey !== 'undefined') {
        q.push(fkey)
        if (o[fkey] <= 1) {
          delete o[fkey]
        } else {
          o[fkey] -= 1
        }
      } else {
        break
      }
    }
    if (q.length < n + 1) {
      Q.push(...q.join('').padEnd(n + 1, '-').split(''))
    } else {
      Q.push(...q)
    }
  }
  const queue = Q.join('').replace(/-+$/g, '')
  return queue.length
}
// @lc code=end

console.log(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 2))
console.log(leastInterval(['A', 'A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E', 'F', 'G'], 2))
