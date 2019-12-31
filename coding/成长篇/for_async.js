const list = [1, 2, 3]

async function foo() {
  return false
}

const data = list.every(async () => {
  console.log('start')
  const result = await foo()
  console.log('end')
  return result
})
console.log('JSLog: data', data) // ?


