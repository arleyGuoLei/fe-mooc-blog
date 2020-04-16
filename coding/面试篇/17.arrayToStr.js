// [1,2,3,4,6,7,9,13,15] => ['1->4',6->7,'9','13','15'] 实现一下

function arr2Section(arr) {
  let head, tail
  return [...arr, null].reduce((acc, current, index) => {
    if (index === 0) {
      head = tail = current
    } else {
      if (current - tail === 1) {
        tail = current
      } else {
        if (head === tail) {
          acc.push(`${head}`)
        } else {
          acc.push(`${head}->${tail}`)
        }
        head = current
        tail = current
      }
    }
    return acc
  }, [])
}
console.log(arr2Section([1, 2, 3, 4, 6, 7, 9, 13, 15]))
