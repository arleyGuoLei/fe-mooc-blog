const arr = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10]

const selectSort = ([...arr]) => {
  for (let i = 0, len = arr.length, minIndex; i < len; i++) {
    minIndex = i
    for (let j = i + 1; j < len; j++) {
      if (arr[minIndex] > arr[j]) { minIndex = j }
    }
    const c = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = c
  }
  return arr
}

console.log('log => : selectSort(arr)', selectSort(arr))
