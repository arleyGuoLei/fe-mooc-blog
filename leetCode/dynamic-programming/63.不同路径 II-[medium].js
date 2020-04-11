/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 *
 * https://leetcode-cn.com/problems/unique-paths-ii/description/
 *
 * algorithms
 * Medium (32.22%)
 * Likes:    264
 * Dislikes: 0
 * Total Accepted:    52.6K
 * Total Submissions: 160.6K
 * Testcase Example:  '[[0,0,0],[0,1,0],[0,0,0]]'
 *
 * 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为“Start” ）。
 *
 * 机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为“Finish”）。
 *
 * 现在考虑网格中有障碍物。那么从左上角到右下角将会有多少条不同的路径？
 *
 *
 *
 * 网格中的障碍物和空位置分别用 1 和 0 来表示。
 *
 * 说明：m 和 n 的值均不超过 100。
 *
 * 示例 1:
 *
 * 输入:
 * [
 * [0,0,0],
 * [0,1,0],
 * [0,0,0]
 * ]
 * 输出: 2
 * 解释:
 * 3x3 网格的正中间有一个障碍物。
 * 从左上角到右下角一共有 2 条不同的路径：
 * 1. 向右 -> 向右 -> 向下 -> 向下
 * 2. 向下 -> 向下 -> 向右 -> 向右
 *
 *
 */

// export default (arr, m, n) => {
//   const dp = (m, n) => {
//     // 检查起始或者目标元素是不是1（被占用了），如果起始或者最后那个格就是1，说明怎么都怎么不到那，直接返回0
//     if (arr[m - 1][n - 1] === 1 || arr[0][0] === 1) {
//       return 0
//     }
//     if (m === 2 && n === 2) {
//       return (arr[1][1] === 1 || arr[1][0] + arr[0][1] === 2) ? 0 : (arr[1][0] === 1 || arr[0][1] === 1) ? 1 : 2
//     } else if (m < 2 || n < 2) {
//       if (m < 2) {
//         return arr[m - 1].includes(1) ? 0 : 1
//       } else {
//         for (let i = 0; i < m; i++) {
//           if (arr[i][0] === 1) {
//             return 0
//           }
//         }
//         return 1
//       }
//     } else {
//       return dp(m - 1, n) + dp(m, n - 1)
//     }
//   }
//   return dp(m, n)
// }
// 下面的加了备忘录优化，但是还是超时。

// @lc code=start
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
  const m = obstacleGrid.length
  const n = obstacleGrid[0].length
  const cacheData = {}
  const getCache = (m, n) => {
    return cacheData[`${m}-${n}`]
  }
  const setCache = (m, n, val) => {
    cacheData[`${m}-${n}`] = val
    return val
  }
  const run = (m, n) => {
    const num = getCache(m, n)
    if (typeof num !== 'undefined') {
      return num
    }
    if (obstacleGrid[m - 1][n - 1] === 1 || obstacleGrid[0][0] === 1) {
      return setCache(m, n, 0)
    }
    if (m === 2 && n === 2) {
      return (obstacleGrid[1][1] === 1 || obstacleGrid[0][1] + obstacleGrid[1][0] === 2) ? setCache(m, n, 0)
        : (obstacleGrid[0][1] === 1 || obstacleGrid[1][0] === 1) ? setCache(m, n, 1)
          : setCache(m, n, 2)
    }
    if (m === 1 || n === 1) {
      if (m === 1) {
        return obstacleGrid[0].includes(1) ? setCache(m, n, 0) : setCache(m, n, 1)
      }
      if (n === 1) {
        return obstacleGrid.every(arr => {
          if (arr[0] === 1) {
            return false
          }
          return true
        }) ? setCache(m, n, 1) : setCache(m, n, 0)
      }
    }
    return run(m - 1, n) + run(m, n - 1)
  }
  return run(m, n)
}
// @lc code=end

uniquePathsWithObstacles([[0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]])

