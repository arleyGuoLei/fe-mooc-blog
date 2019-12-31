const a = require('./a')

a.getA()

const getB = () => {
  console.log('getB')
}

module.exports = {
  getB
}