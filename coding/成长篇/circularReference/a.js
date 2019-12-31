const b = require('./b')

b.getB()

const getA = () => {
  console.log('getA')
}

module.exports = {
  getA
}