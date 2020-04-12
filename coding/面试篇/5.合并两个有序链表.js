/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (59.08%)
 * Likes:    947
 * Dislikes: 0
 * Total Accepted:    226.3K
 * Total Submissions: 371.3K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个升序链表合并为一个新的升序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 *
 * 示例：
 *
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 *
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
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (l1 === null) {
    return l2
  }
  if (l2 === null) {
    return l1
  }
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }
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
    for (let i = 0, len = arr.length; i < len; i++) {
      next.next = new Node(arr[i])
      next = next.next
    }
    return head
  }

  static toArray(list) {
    const arr = []
    while (list) {
      arr.push(list.val)
      list = list.next
    }
    return arr
  }
}

const list1 = new LinkList([1, 2, 5])
const list2 = new LinkList([0, 3, 4])
console.log('log => : mergeTwoLists(list1, list2)', LinkList.toArray(mergeTwoLists(list1, list2)))
