/**
 * 正则篇对应代码
 */

/**
 *贪婪匹配 和 惰性匹配
 */
{
  const a = /arley6{1,3}/ // arley6666666 => arley666
  const b = /arley6{1,3}?/ // arley6666666 => arley6
  const c = /arley6*/ // arley6666666 => arley6666666
  const d = /arley6*?/ // arley6666666 => arley
  const e = /.*?/ // arley6666666 => 空
  const f = /.*?6/ // arley6666666 => arley6
  const g = /.*?$/ // arley6666666 => arley6666666
  const h = /r.*?$/ // arley6666666 => rley6666666
  const i = /^r.*?$/ // arley6666666 => 空
}

/**
 * 或
 */
{
  const a = /whatever|what/ // whatever => whatever
  const b = /what|whatever/ // whatever => what (惰性匹配，前面的满足条件了，就不匹配后面的)

  const c = /arley what|whatever/ // arleywhatever => whatever
  const d = /arley(what|whatever)/ // arleywhatever => arleywhat
}

/**
 * 匹配16进制颜色值
 */
{
  const str = `#ffbbad
#Fc01DF
#FFF
#ffE`
  const reg = /#[a-f0-9]{6}|#[a-f0-9]{3}/gi
  str.match(reg) // ["#ffbbad", "#Fc01DF", "#FFF", "#ffE"]
}

/**
 * 匹配24小时制时间
 */

{
  const str = `11:03
23:59
00:00
07:55
`
  const reg = /([01][0-9]|2[0-3]):[0-5][0-9]/gi
  str.match(reg)
  console.log('JSLog: str.match(reg)', str.match(reg))
}

/**
 * 匹配日期
 */

{
  const str = `
test  
a 2017-06-10 a
b 2019-11-03 b
c 2020-03-11 c
d 2020-10-11 d
`
  const reg = /[0-9]{4}-(0[0-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])/gi
  str.match(reg)
  console.log('JSLog: str.match(reg)', str.match(reg))
}

/**
 * 匹配邮箱
 */

{
  const str = `
132@qq.com
arley@i7xy.cn
lei@mi.com
arley@sina.com.cn
大老表@baidu.cn
`
  const reg = /([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})/gi
  str.match(reg)
  console.log('JSLog: str.match(reg)', str.match(reg))
}

{
  function titleize(str) {
    return str.toLowerCase().replace(/(^|\s)\w/g, function(c) {
      console.log('=>>>>>', c)
      return c.toUpperCase()
    })
  }

  console.log(titleize('xiaomi is a big big compony'))
}

{
  // 将HTML特殊字符转换成等值的实体
  function escapeHTML(str) {
    var escapeChars = {
      '<': 'lt',
      '>': 'gt',
      '"': 'quot',
      '&': 'amp',
      '\'': '#39'
    }
    const reg = new RegExp('[' + Object.keys(escapeChars).join('') + ']', 'g')
    console.log('JSLog: escapeHTML -> reg', reg) // /[<>"&']/g
    return str.replace(reg,
      function(match) {
        return '&' + escapeChars[match] + ';'
      })
  }
  console.log(escapeHTML('<div>Blah blah blah</div>'))
  // => "&lt;div&gt;Blah blah blah&lt;/div&gt";

  // 实体字符转换为等值的HTML
  function unescapeHTML(str) {
    var htmlEntities = {
      nbsp: ' ',
      lt: '<',
      gt: '>',
      quot: '"',
      amp: '&',
      apos: '\''
    }
    return str.replace(/\&([^;]+);/g, function(match, key) {
      console.log('JSLog: unescapeHTML -> match', match)
      console.log('JSLog: unescapeHTML -> key', key)
      if (key in htmlEntities) {
        return htmlEntities[key]
      }
      return match
    })
  }
  console.log(unescapeHTML('&lt;div&gt;Blah blah blah&lt;/div&gt;'))
  // => "<div>Blah blah blah</div>"

  // [^]  可匹配任意字符，包括换行
  console.log('&lt;div&gt;Blah blah blah&lt;/div&gt;'.match(/[^;]+/g))//  ["&lt", "div&gt", "Blah blah blah&lt", "/div&gt"]
  console.log('&lt;div&gt;Blah blah blah&lt;/div&gt;'.match(/[^]+;/g)) // ["&lt;div&gt;Blah blah blah&lt;/div&gt;"]
  console.log('&lt;div&gt;Blah blah blah&lt;/div&gt;'.match(/[^]+?;/g)) // ["&lt;", "div&gt;", "Blah blah blah&lt;", "/div&gt;"]
}

{
  const str = `aabc
 a abcd`
  const reg = /(^|\s)\w\1\w/g
  str.match(reg)
  console.log('JSLog:   str.match(reg)', str.match(reg)) //  ["aa", " a a"]
}
