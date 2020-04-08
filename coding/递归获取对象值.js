const people = {
  id: 1,
  userInfo: {
    age: 18
  },
  deep: {
    deep: {
      deep: {
        deep: {
          val: 'i am cool'
        }
      }
    }
  }
}

const getObjVal = (obj, key) => {
  const dotPos = key.indexOf('.')
  const _key = key.substring(0, dotPos !== -1 ? dotPos : undefined)
  if (typeof obj[_key] === 'object' && obj[_key] !== null && dotPos !== -1) {
    return getObjVal(obj[_key], key.substring(dotPos + 1))
  }
  return obj[_key]
}

console.log(getObjVal(people, 'id'))
console.log(getObjVal(people, 'userInfo'))
console.log(getObjVal(people.userInfo, 'age'))
console.log(getObjVal(people, 'userInfo.age'))
console.log(getObjVal(people, 'deep.deep.deep.deep.val'))
