class Adaptee {
  specificRequest() {
    return '我是原本的插头'
  }
}

class Target {
  constructor() {
    this.adaptee = new Adaptee()
  }

  request() {
    const info = this.adaptee.specificRequest()
    return `${info} - 转换器 - 我才可以用`
  }
}

const target = new Target()
const data = target.request()
console.log(data)
