{
  interface StringArray {
    name: string
    age: number
    [key: string]: any
  }

  const arr: StringArray = {name: "a", age: 19, sex: "1"}
  console.log('JSLog: arr["name"]', arr.name)
} 

{
  interface ReadonlyStringArray {
    readonly [index: number]: string;
  }
  let myArray: ReadonlyStringArray = ['Alice', 'Bob'];
  // myArray[2] = 'Mallory'; // error!
}

{
  interface arr {
    [index: number]: number
  }

  const list: arr = [1, 2, 3]
  
}