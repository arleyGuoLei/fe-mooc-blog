class People {
  protected name: string
  constructor (name: string) {
    this.name = name
  }
}

class Student extends People {
  constructor() {
    super('bob')
  }
}

new Student()