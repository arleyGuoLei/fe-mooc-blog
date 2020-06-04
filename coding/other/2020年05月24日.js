/**
 *
题目描述：
某市马上要举办运动会了，组委会决定通过网络征集的方式来决定大会标语。有ｍ条标语参加评选，共有ｎ人参与投票，每人投一票，规定采用得票超过n/k的标语(假设只有一条标语满足要求)。请你写一个程序帮助小安挑出胜出的标语的序号。
输入：
一共 n+1 个整数，用空格分隔。第一个整数是 k，第二个整数开始每个数代表每个投票上选择的标语的序号（大于 0 小于 2147483647 的整数）。

输出：
会被采用的标语的序号。

样例输入 Copy：
3 1 2 2

样例输出 Copy：
2
 */

/**
  * 法一
  * @param {String} str 输入字符串
  */
function getTagA(str) {
  const [k, ...voteRes] = str.split(' ')
  const nDivK = voteRes.length / k
  const voteMap = {} // 存储每一个序号的所得投票数目
  for (const id of voteRes) { // n
    if (typeof voteMap[id] === 'undefined') { voteMap[id] = 1 } else {
      voteMap[id] = voteMap[id] + 1
    }
    if (voteMap[id] > nDivK) {
      return id
    }
  }
  return -1 // 不存在满足的序号
}

/**
  * 法二
  * @param {String} str 输入字符串
  */
function getTagB(str) {
  // 获取出现次数最多的元素
  function findMost(arr) {
    let maxEle
    let maxNum = 1
    const obj = arr.reduce(function(p, k) {
      p[k] ? p[k]++ : p[k] = 1
      if (p[k] > maxNum) {
        maxEle = k
        maxNum++
      }
      return p
    }, {})
    // console.log(`出现最多:${maxEle}, 为${obj[maxEle]}次`)
    return [maxEle, obj[maxEle]]
  }
  const [k, ...voteRes] = str.split(' ')
  const [id, num] = findMost(voteRes.sort())
  if (num > voteRes.length / k) {
    return id
  }
  return -1
}

console.log(getTagA('3 1 2 2'))
console.log(getTagB('3 1 2 2'))
