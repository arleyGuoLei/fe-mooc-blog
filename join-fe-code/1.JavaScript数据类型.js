/**
 * 原始类型
 */

// boolean，
const b1 = true
const b2 = false

// number，-2^53 ~ 2^53
// 最大的安全数为 Math.pow(2, 53) - 1，即 9007199254740991
Math.pow(2, 53) === Math.pow(2, 53) + 1 // true

// string
// undefined
// null
// symbol
// bigint

/**
 * 对象(引用)类型
 */

// Object，含多种子类型：Array、Error、RegExp、Math、Map、Set、Boolean、String等等
// Function

function test(person) {
  person.age = 26
  person = {}

  return person
}
const p1 = {
  age: 25
}
