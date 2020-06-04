// 一杯奶茶 = 一个印章
// 五个印章 = 一杯奶茶 + 一个印章
// 买N杯奶茶 实际可以得到多少杯奶茶？

function getTeaNumber(n) {
  let num = n // 默认奶茶数目
  while (n >= 5) { // 当印章数目还能换奶茶的时候, n: 印章数
    num++ // 换了一杯奶茶
    n = n - 5 + 1 // 印章数减掉换了的5个，又可以加一个印章
  }
  return num
}

console.log(getTeaNumber(4) === 4) // 积累了四个印章
console.log(getTeaNumber(5) === 6) // 积累了五个印章，兑换一杯，又有了一个印章
console.log(getTeaNumber(6) === 7) // 积累了两个印章
console.log(getTeaNumber(7) === 8) // 积累了三个印章
console.log(getTeaNumber(8) === 9) // 积累了四个印章
console.log(getTeaNumber(9) === 11) // 积累了五个印章，兑换一杯，又有了一个印章
console.log(getTeaNumber(10) === 12) // 积累了两个印章
console.log(getTeaNumber(11) === 13) // 积累了三个印章
console.log(getTeaNumber(12) === 14) // 积累了四个印章
console.log(getTeaNumber(13) === 16) // 五个印章，兑换一杯，又有了一个印章
