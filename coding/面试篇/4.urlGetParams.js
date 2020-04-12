const url = 'http://i7xy.cn/?a=1&b=2&c=3&d=4'

function get() {
  const re = /[?&](\w+?)=(\w+?)/g
  const params = {}
  while (result = re.exec(url)) {
    params[result[1]] = result[2]
  }
  return params
}

console.log('log => : get(url)', get(url))
