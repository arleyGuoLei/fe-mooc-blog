function isType(obj, type) {
  console.log(Object.prototype.toString.call(obj) === `[object ${type}]`)
  return Object.prototype.toString.call(obj) === `[object ${type}]`
}

isType(true, 'Boolean')
isType(false, 'Boolean')
isType(666, 'Number')
isType(null, 'Null')
isType(undefined, 'Undefined')
isType(Symbol(), 'Symbol')
isType({}, 'Object')
isType([], 'Array')
isType(() => {}, 'Function')
isType(new Error(), 'Error')
isType(new String(''), 'String')
isType('', 'String')
isType(/^/, 'RegExp')

