/**
 * object转化成url拼接样式
 * @param obj 需要转化的参数
 */
const objToUrl = obj => {
  const arr = []
  for (const i in obj) {
    if (obj.hasOwnProperty(i)) {
      arr.push(encodeURIComponent(i) + '=' + encodeURIComponent(obj[i]))
    }
  }
  return arr.join('&')
}
// 调用
objToUrl({ name: 'hehe', age: 10 })

/**
 * url转化成object拼接样式
 * @param url 需要转化的参数
 */
const urlToObj = url => {
  const string = url.split('&')
  const res = {}
  for (let i = 0; i < string.length; i++) {
    const str = string[i].split('=')
    if (str[0] !== '') {
      res[str[0]] = str[1]
    }
  }
  return res
}
// 调用
urlToObj('a=1&b=2')
