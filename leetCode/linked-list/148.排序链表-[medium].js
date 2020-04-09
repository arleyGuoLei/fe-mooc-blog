/*
 * @lc app=leetcode.cn id=148 lang=javascript
 *
 * [148] 排序链表
 *
 * https://leetcode-cn.com/problems/sort-list/description/
 *
 * algorithms
 * Medium (63.08%)
 * Likes:    480
 * Dislikes: 0
 * Total Accepted:    52.5K
 * Total Submissions: 81K
 * Testcase Example:  '[4,2,1,3]'
 *
 * 在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序。 // 堆排序才满足条件
 * // 目前先使用链表快排来解决
 *
 * 示例 1:
 *
 * 输入: 4->2->1->3
 * 输出: 1->2->3->4
 *
 *
 * 示例 2:
 *
 * 输入: -1->5->3->4->0
 * 输出: -1->0->3->4->5
 *
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function swap(p, q) {
  const val = p.val
  p.val = q.val
  q.val = val
}

const partion = (begin, end = null) => {
  const val = begin.val
  let p = begin
  let q = begin.next
  while (q !== end) {
    if (q.val < val) {
      p = p.next
      swap(p, q)
    }
    q = q.next
  }
  // 让基准元素跑到中间去
  swap(p, begin)
  return p
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(begin, end) {
  if (begin !== end && begin !== null) {
    const part = partion(begin, end)
    // begin和end会在partion函数中被修改
    sortList(begin, part)
    sortList(part.next, end)
  }
  return begin
}
// @lc code=end

class Node {
  constructor(val) {
    this.val = val
    this.next = null
  }
}

class LinkList {
  constructor(arr) {
    const head = new Node(arr.shift())
    let next = head
    arr.forEach(num => {
      next.next = new Node(num)
      next = next.next
    })
    return head // this绑定到了返回的对象上
  }

  static toArray(list) {
    const arr = []
    while (list.next) {
      arr.push(list.val)
      list = list.next
    }
    return arr
  }
}

const list = new LinkList([6, 1, 2, 7, 9, 3, 4, 5, 10, 8])
sortList(list)
console.log('log => : ListNode', LinkList.toArray(list))
