class Circle {
  draw() {
    console.log('画一个○')
  }
}

class Decorator {
  constructor(circle) {
    this.circle = circle
  }
  draw() {
    this.circle.draw()
    this.setBorder()
  }

  setBorder() {
    console.log('设置一个边框')
  }
}

const circle = new Circle()
circle.draw()

const dec = new Decorator(circle)
dec.draw()
