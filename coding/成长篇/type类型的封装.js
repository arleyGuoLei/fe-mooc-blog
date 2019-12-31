const TYPES = [
  'Boolean',
  'Number',
  'String',
  'Function',
  'Array',
  'Date',
  'RegExp',
  'Object',
  'Error'
]

const type = TYPES.reduce((acc, item) => {
  acc[`is${item}`] = obj => {
    return Object.prototype.toString.call(obj) === `[object ${item}]`
  }
  return acc
}, {})

export default type
