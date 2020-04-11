// P248
/**
 * 数组交换两个Index的值
 * @param {Array} array 数组
 * @param {Number} a 数组Index
 * @param {Number} b 数组Index
 */
function swap(array, a, b) {
  [array[a], array[b]] = [array[b], array[a]]
}

function partition(array, left, right) {
  // 基数: [0,1,2] // 0,2 => 1
  // 偶数: [0,1,2,3] // 0,3 => 1
  const pivot = array[Math.floor((left + right) / 2)] // 主元（取中间元素, 可以取其他位置)
  let i = left // 左指针，找大(停止循环)
  let j = right // 右指针，找小(停止循环)

  while (i <= j) { // 直到左右指针交汇
    while (array[i] < pivot) { // 左指针要找大(停止循环)，当遇到的比主元小，就一直向右移动
      i++
    }
    while (array[j] > pivot) { // 右指针要找小(停止循环)，当遇到的比主元大，就一直往左移动
      j--
    }
    if (i <= j) { // 左右指针都停止的时候(且左<=右)，交换左右指针所指的值
      swap(array, i, j)
      i++ // 左指针继续往右移动
      j-- // 右指针继续往左移动
      // PS: 如果i<=j 还是会继续移动指针，直到left > right
    }
  }
  return i // 返回左指针作为分隔
}

/**
 * 快速排序-递归
 * @param {Array} array 待排序数组
 * @param {Number} left 起始Index
 * @param {Number} right 结尾Index
 */
function quick(array, left, right) {
  let index
  if (array.length > 1) {
    index = partition(array, left, right)
    if (left < index - 1) {
      quick(array, left, index - 1)
    }
    if (index < right) {
      quick(array, index, right)
    }
  }
  return array
}

function quickSort(array) {
  return quick(array, 0, array.length - 1)
}

console.log('[3, 5, 1, 6, 4, 7, 2] => ', quickSort([3, 5, 1, 6, 4, 7, 2]))
