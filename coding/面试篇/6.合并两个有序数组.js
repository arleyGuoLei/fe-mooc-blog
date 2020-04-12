
var merge = function(nums1, m, nums2, n) {
  let length = m + n // 总长度
  while (n > 0) { // nums2的长度 > 0, 直到nums2完全写入
    if (m <= 0) { // 如果数组1的指针已经移到头了，也就是已经排序完数组1了，数组二就全部填剩下的位置
      length--
      n--
      nums1[length] = nums2[n]
      continue
    }
    length-- // 在nums1倒叙填入最大的数字, 谁大写谁, 谁的指针左移
    if (nums1[m - 1] >= nums2[n - 1]) {
      m--
      nums1[length] = nums1[m]
    } else {
      n--
      nums1[length] = nums2[n]
    }
  }
}
merge([2, 0], 1, [1], 1)
