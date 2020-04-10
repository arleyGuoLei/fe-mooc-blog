const list = [
  {
    name: '1',
    children: [
      {
        name: '2',
        children: [
          { name: '3' },
          { name: '4', children: [{ name: '5' }, { name: '6' }] }
        ]
      },
      { name: '7', children: [{ name: '8', children: [{ name: '9' }] }] }
    ]
  }
]
function getName(data) {
  const result = []
  data.forEach((item) => {
    const map = (data) => {
      result.push(data.name)
      data.children &&
        data.children.forEach((child) => {
          map(child)
        })
    }
    map(item)
  })
  return result.join(',')
}
console.log(getName(list))
// 1,2,3,4,5,6,7,8,9
