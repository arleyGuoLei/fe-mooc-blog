window.name = 'arley'

const obj = {
  name: 'jessie'
}

const fn = () => {
  console.log(this.name)
}

fn.call(obj)
