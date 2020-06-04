function readline1() {
  return '4'
}
function readline2() {
  return '3 2 1 5'
}
function print(s) {
  console.log(s)
}

var n = readline1()
var arr = readline2().split(' ')
arr.sort((a, b) => b - a)

var number = 0

while (arr[0] >= n) {
  var max = arr.shift()
  arr = [max - n, ...arr.map(num => (num * 1 + 1) * 1)]
  arr.sort((a, b) => b - a)
  number++
}

print(number)
