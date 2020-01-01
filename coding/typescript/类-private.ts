class People {
  name: string
  // private name: string
  constructor (name: string) {
    this.name = name
  }
}

const p1: People = new People('a')

p1.name = "222";