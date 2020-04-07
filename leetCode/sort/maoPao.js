const arr = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10]

const mpSort = ([...arr]) => {
  for (let i = arr.length, tmp; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      tmp = arr[j]
      if (tmp > arr[j + 1]) {
        arr[j] = arr[j + 1]
        arr[j + 1] = tmp
      }
    }
  }
  return arr
}

console.log('log => : mpSort(arr)', mpSort(arr))
