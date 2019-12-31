{
  enum Color {
    Red,
    Green,
    Blue
  }
  
  let c1: Color = Color.Red
  console.log('JSLog: c1', c1)
  let c2: Color = Color.Green
  console.log('JSLog: c2', c2)
  let c3: Color = Color.Blue
  console.log('JSLog: c3', c3)
}

{
  enum Color {
    Red = 3,
    Green,
    Blue = 6
  }
  
  let c1: Color = Color.Red
  console.log('JSLog: c1', c1)
  let c2: Color = Color.Green
  console.log('JSLog: c2', c2)
  let c3: Color = Color.Blue
  console.log('JSLog: c3', c3)
}
