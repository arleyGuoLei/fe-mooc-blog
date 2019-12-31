class LoadImg {
  constructor(fileName) {
    this.fileName = fileName
    this.load()
  }
  load() {
    console.log('loading... img: ' + this.fileName)
  }
  show() {
    console.log('show... img: ' + this.fileName)
  }
}

class ProxyImg {
  constructor(fileName) {
    this.realImg = new LoadImg(fileName)
  }
  show() {
    this.realImg.show()
  }
}

const aImg = new ProxyImg('a.png')
aImg.show()
