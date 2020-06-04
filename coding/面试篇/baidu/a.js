function readline() {
  return '5'
}
function print(s) {
  console.log(s)
}
// readline()
// print(ans)

function gcb(a, b) {
  if (b === 0) { return a }
  var res = a % b
  return gcb(b, res)
}

function lcm(a, b) {
  return (a * b) / gcb(a, b)
}

var map = {}

function calc(i, j) {
  const num = map[`${i},${j}`]
  if (typeof num !== 'undefined') {
    return num
  } else {
    const res = lcm(i, j) - gcb(i, j)
    map[`${i},${j}`] = res
    return res
  }
}

var n = parseInt(readline())
var max = 0
for (var i = 2; i <= n; i++) {
  for (var j = 2; j <= n; j++) {
    if (i !== j) {
      var res = calc(i, j)
      if (res > max) {
        max = res
      }
    }
  }
}
print(max)

