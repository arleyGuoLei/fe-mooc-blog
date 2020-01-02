---
title: 前端一万五 - typeScript篇
date: 2019-12-27 08:47:20
sidebar: 'auto'
categories: 
 - 前端一万五
tags: 
 - typeScript
publish: true
---

<!-- more -->

## 初识typeScript

TypeScript 作为 JavaScript 语言的超集，它为 JavaScript 添加了**可选择的类型标注**，大大增强了代码的可读性和可维护性。同时，它提供最新和不断发展的 JavaScript 特性，能让我们建立更健壮的组件。

### typeScript特点

- 始于JavaScript，归于JavaScript

TypeScript 可以编译出纯净、 简洁的 JavaScript 代码，并且可以运行在任何浏览器上、Node.js 环境中和任何支持 ECMAScript 3（或更高版本）的JavaScript 引擎中。

- 先进的JavaScript语法支持

新特性为开发时是可用的，但是会被编译成简洁的 ECMAScript3（或更新版本）的JavaScript

- 可选择的类型标注

### 安装

```bash
sudo npm install -g typescript
tsc -V # 查看版本
```

### 第一个程序 (广度)

```ts
// 1. 在user.ts文件中输入以下代码
// 2. 执行tsc user.ts，生成user.js文件
// 3. 执行node user.js，查看结果

class User { // es6 - 类， ts可以使用更高级别的js语法

  fullName: string // 类型注解 ...
  firstName: string
  lastName: string

  constructor (firstName: string, lastName: string) { // 参数类型
    this.firstName = firstName
    this.lastName = lastName
    this.fullName = firstName + ' ' + lastName
  }
}

interface Person { // 接口
  firstName: string
  lastName: string
}

function greeter (person: Person) { // 参数类型
  return 'Hello, ' + person.firstName + ' ' + person.lastName
}

let user = new User('Arley', 'Guo')

console.log(greeter(user))
```

## 基础类型

### 1. Boolean

```ts
let isTS: boolean = true
```

### 2. Number

```ts
let decLiteral: number = 20 // 10进制
let hexLiteral: number = 0x14 // 16进制
let binaryLiteral: number = 0b10100 // 2进制
let octalLiteral: number = 0o24 // 8进制
```

### 3. String

```ts
let name: string = 'arley' // 单引号 或 双引号表示
let sentence: string = `hello, ${ name }` // ES6模板字符串

```

### 4. Array

```ts
let list: number[] = [1, 2, 3]
let names: string[] = ['arley', 'guo', 'lei']
let list: Array<number> = [1, 2, 3] // 泛型数组 Array<元素类型>
```

### 5. Tuple

元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。

```ts
let x: [string, number]

x = ['arley', 97] // OK
x = [97, 'arley'] // Error

console.log(x[0].substr(1)) // OK
console.log(x[1].substr(1)) // Error, 'number' 不存在 'substr' 方法

// 当访问一个越界的元素，会使用联合类型替代：

x[3] = 'world' // OK, 字符串可以赋值给(string | number)类型

console.log(x[5].toString()) // OK, 'string' 和 'number' 都有 toString

x[6] = true // Error, 布尔不是(string | number)类型

```

:::tip
注意：自从 TyeScript 3.1 版本之后，访问越界元素会报错，我们不应该再使用该特性。
:::

### 6. Enum

```ts
  enum Color {
    Red,
    Green,
    Blue
  }
  
  let c1: Color = Color.Red // 0
  let c2: Color = Color.Green // 1
  let c3: Color = Color.Blue // 2
```

默认情况下，从 0 开始为元素编号。 也可以手动的指定成员的数值。 例如，我们将上面的例子改成从 1 开始编号：

```ts
enum Color {Red = 1, Green, Blue}
let c: Color = Color.Green // 2
```

```ts
enum Color {Red = 1, Green = 2, Blue = 4}
let c: Color = Color.Blue // 4
```

枚举类型提供的一个便利是你可以由枚举的值得到它的名字。 例如，我们知道数值为 2，但是不确定它映射到 Color 里的哪个名字，我们可以查找相应的名字：

```ts
enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2]

console.log(colorName)  // 显示'Green'因为上面代码里它的值是2
```

### 7. any

有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。 这些值可能来自于动态的内容，也可能是多个类型的数组，比如来自用户输入或第三方代码库。
这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 那么我们可以使用 any 类型来标记这些变量：

```ts
let notSure: any = 4
notSure = 'maybe a string instead'
notSure = false // 也可以是个 boolean
```

```ts
let list: any[] = [1, true, 'free']

list[1] = 100
```

### 8. void

一般用于函数返回值，表示什么都不返回；因为变量可以用`null`、`undefined`来定义

```ts
function log(): void {
  console.log('This is a log')
}
```

### 9. null 和 undefined

用处一般不大，因为这样的变量没有多大意义

```ts
let u: undefined = undefined
let n: null = null
```

默认情况下 null 和 undefined 是所有类型的子类型。 意味着可以把 null 和 undefined 赋值给 number 类型或其他类型的变量。

然而，当你指定了 --strictNullChecks 标记，null 和 undefined 只能赋值给 void 和它们各自，这能避免 很多常见的问题。（脚手架一般都开启了，所以本条也没有多大用处）

### 10. never

一般用于函数返回，比如以下场景

```ts
// 返回never的函数必须存在无法达到的终点

function error(message: string): never {
  throw new Error(message)
}

function infiniteLoop(): never {
  while (true) {
  }
}
```

### 11. object

JS中object 表示非原始类型，也就是除 number，string，boolean，symbol，null或undefined 之外的类型。

```ts
declare function create(o: object | null): void // 声明create函数，入参o可以为object或null类型，没有返回值

create({ prop: 0 }) // OK
create(null) // OK

create(42) // Error
create('string') // Error
create(false) // Error
create(undefined) // Error
```

### 12. 类型断言

你认为一个变量的确是某一个类型，但是编辑器TS报错，这时候就可以通过类型断言。

通过类型断言这种方式可以告诉编译器，“相信我，我知道自己在干什么”。 类型断言好比其它语言里的类型转换，但是不进行特殊的数据检查和解构。 它没有运行时的影响，只是在编译阶段起作用。

类型断言有两种形式。 其一是“尖括号”语法：

```ts
let someValue: any = 'this is a string'

let strLength: number = (<string>someValue).length
```

另一个为 as 语法：

```ts
let someValue: any = 'this is a string'

let strLength: number = (someValue as string).length
```

两种形式是等价的。 至于使用哪个大多数情况下是凭个人喜好；然而，当你在 TypeScript 里使用 JSX 时，只有 as 语法断言是被允许的。所以优先推荐`as`语法。

## 接口

### 接口初探

```ts
interface LabelledValue { // LabelledValue 接口就好比一个名字，用来描述对象的结构。 它代表了有一个 label 属性且类型为string 的对象。
  label: string // 接口可以由多个属性，检查的时候，不关心属性顺序， 只关心属性是否存在 和 类型是否正确
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label)
}

let myObj = {size: 10, label: 'Size 10 Object'}
printLabel(myObj)
```

### 可选属性

- 对可能存在的属性进行预定义

- 捕获引用了不存在的属性时候的错误，比如属性引用时候，单词拼写错误

```ts
interface Square {
  color: string,
  area: number
}

interface SquareConfig { // 带有可选属性的接口与普通的接口定义差不多，只是在可选属性名字定义的后面加一个 ? 符号。
  color?: string
  width?: number
}

function createSquare (config: SquareConfig): Square {
  let newSquare = {color: 'white', area: 100}
  if (config.color) {
    newSquare.color = config.color
  }
  if (config.width) {
    newSquare.area = config.width * config.width
  }
  return newSquare
}

let mySquare = createSquare({color: 'black'})
```

### 只读属性

- 只能在对象刚刚创建的时候修改其值

- 可以在属性名前用`readonly`来指定只读属性

- 用于对象的属性使用`readonly`，而如果是普通只读变量，则直接使用`const`即可

```ts
interface Point {
  readonly x: number
  readonly y: number
}

let p1: Point = { x: 10, y: 20 }
p1.x = 5 // error!
```

也可以创建只读数组，将会禁用数组改变的所有方法:  `ReadonlyArray<T>` 类型

```ts
let a: number[] = [1, 2, 3, 4]
let ro: ReadonlyArray<number> = a
ro[0] = 12 // error!
ro.push(5) // error!
ro.length = 100 // error!

// 将readOnly的数组赋值给其他数组也会报错，因为是直接进行了地址赋值
a = ro // error!
```

### 额外的属性检查

```ts
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare (config: SquareConfig): { color: string; area: number } {
  let newSquare = {color: 'white', area: 100}
  if (config.color) {
    newSquare.color = config.color
  }
  if (config.width) {
    newSquare.area = config.width * config.width
  }
  return newSquare
}

// error: 'colour' 不存在于类型 'SquareConfig' 中
let mySquare = createSquare({ colour: 'red', width: 100 }) // 注意，此处colour故意拼写错误，达到存在额外属性的效果

// 绕过错误的最简单方法是使用类型断言，但不是最佳方法
let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig)
```

你可能会争辩这个程序已经正确地类型化了，因为 width 属性是兼容的，不存在 color 属性，而且额外的 colour 属性是无意义的。

然而，TypeScript 会认为这段代码可能存在 bug。 对象字面量会被特殊对待而且会经过额外属性检查，当将它们赋值给变量或作为参数传递的时候。 如果一个对象字面量存在任何“目标类型”不包含的属性时，你会得到一个错误。

处理一个对象可能存在其他未知属性的最佳方案： 添加一个字符串索引签名

```ts
// 表示的是SquareConfig 可以有任意数量的属性，并且只要它们不是 color 和 width，那么就无所谓它们的类型是什么。
interface SquareConfig {
  color?: string
  width?: number
  [propName: string]: any // 添加一个字符串索引签名, propName名字可以自定义。但类型为string, 返回类型要包含已定义的属性类型和将会存在的属性的类型
}
```

### 函数类型

前面的知识点都是使用接口来描述普通对象的类型定义，接口也可以描述函数类型，可定义一个函数的入参及类型和返回值类型。

```ts
interface SearchFunc {
  (source: string, subString: string): boolean // 第一个入参为字符串，第二个入参也为字符串，返回值为布尔
}

let mySearch: SearchFunc
// 还可以省略类型，写成 (src, sub) {} 的形式，编辑器会根据接口自己对类型进行推断
mySearch = function(src: string, sub: string): boolean { // 对于函数类型的类型检查来说，函数的参数名不需要与接口里定义的名字相匹配, 只关心顺序（类型）
  let result = source.search(subString);
  return result > -1
}
```

### 可索引的类型

描述那一些通过索引得到的类型，比如a[2]、map['name']。可索引类型具有一个索引签名，它描述了对象索引的类型，还有相对索引返回的值类型。

```ts
interface StringArray {
  [index: number]: string // 表示了当用 number 去索引 StringArray 时会得到 string 类型的返回值
}

let arr: StringArray = ['a', 'b', 'c']
let str: string = arr[1]
```

TypeScript 支持两种索引签名：字符串和数字，可以同时使用两种类型的索引。**使用前提**： 数字索引的返回值类型 是 字符串索引的返回值类型 的 `子类型`。

因为当使用 number 来索引时，JavaScript 会将它转换成string 然后再去索引对象。

```ts
class Animal {
  name: string
}
class Dog extends Animal {
  breed: string
}

// 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
interface NotOkay {
  [x: number]: Animal // 数字索引签名  => error: 数字索引的返回值类型 是 字符串索引的返回值类型 的 `子类型`
  [x: string]: Dog // 字符串索引签名
}
```

下面的例子里， name 的类型与字符串索引类型不匹配，所以类型检查器给出一个错误提示：

```ts
interface NumberDictionary {
  [index: string]: number // 索引签名 => 使用字符串索引，获取number类型
  length: number     // 可以，length是number类型
  name: string       // 错误，`name`的类型与索引类型返回值的类型不匹配
}
```

最后，你可以将索引签名设置为只读，这样就防止了给索引赋值：

```ts
interface ReadonlyStringArray {
  readonly [index: number]: string;
}
let myArray: ReadonlyStringArray = ['Alice', 'Bob'];
myArray[2] = 'Mallory'; // error!
```

#### 索引签名总结

- 定义接口中没定义的其他属性的返回值类型 => 额外的属性检查

```ts
interface Obj {
  name: string
  age: number
  [key: string]: any // 除了name和age属性外，还可能存在其他属性，返回值为any (索引签名的返回值类型需要包含已定义属性name、age的返回值类型)。key可以随意取名
}
```

### 类的类型

实现接口：与 C# 或 Java 里接口的基本作用一样，TypeScript 也能够用它来明确的强制一个类去符合某种契约。

接口描述了类的`公共部分`，而不是公共和私有两部分。 它不会帮你检查类是否具有某些私有成员。

你也可以在接口中描述一个方法，在类里实现它，如同下面的 setTime 方法一样：

```ts
interface ClockInterface {
  currentTime: Date
  setTime(d: Date)
}

class Clock implements ClockInterface {
  currentTime: Date
  setTime(d: Date) {
    this.currentTime = d
  }
  constructor(h: number, m: number) { }
}
```

```ts
interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface // new表示构造函数， 属于静态类型
}
interface ClockInterface {
  tick() // 共用部分
  // new (hour: number, minute: number): ClockInterface // error：当一个类实现了一个接口时，只对其实例部分进行类型检查。constructor 存在于类的静态部分，所以不在检查的范围内。
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
  return new ctor(hour, minute)
}

class DigitalClock implements ClockInterface {
  constructor(h: number, m: number) { }
  tick() {
    console.log('beep beep')
  }
}
class AnalogClock implements ClockInterface {
  constructor(h: number, m: number) { }
  tick() {
    console.log('tick tock')
  }
}

let digital = createClock(DigitalClock, 12, 17)
let analog = createClock(AnalogClock, 7, 32)
```

### 继承接口(接口类型)

和类一样，接口也可以相互继承。 这让我们能够从一个接口里复制成员到另一个接口里，可以更灵活地将接口分割到可重用的模块里。

```ts
interface Shape {
  color: string
}

interface Square extends Shape {
  sideLength: number
}

let square = {} as Square
square.color = 'blue'
square.sideLength = 10
```

多继承接口

```ts
interface Shape {
  color: string
}

interface PenStroke {
  penWidth: number
}

interface Square extends Shape, PenStroke {
  sideLength: number
}

let square = {} as Square
square.color = 'blue'
square.sideLength = 10
square.penWidth = 5.0
```

### 混合类型

先前我们提过，接口能够描述 JavaScript 里丰富的类型。 因为 JavaScript 其动态灵活的特点，有时你会希望一个对象可以同时具有上面提到的多种类型。

一个例子就是，一个对象可以同时做为函数和对象使用，并带有额外的属性。

```ts
interface Counter {
  (start: number): string
  interval: number
  reset(): void
}

function getCounter(): Counter {
  let counter = (function (start: number) { }) as Counter
  counter.interval = 123
  counter.reset = function () { }
  return counter
}

let c = getCounter()
c(10)
c.reset()
c.interval = 5.0
```

### 接口继承类

当接口继承了一个类类型时，它会继承类的成员但不包括其实现。 就好像接口声明了所有类中存在的成员，但并没有提供具体实现一样。 接口同样会继承到类的 private 和 protected 成员。

这意味着当你创建了一个接口继承了一个拥有私有或受保护的成员的类时，这个接口类型只能被这个类或其子类所实现（implement）。

当你有一个庞大的继承结构时这很有用，但要指出的是你的代码只在子类拥有特定属性时起作用。 这个子类除了继承至基类外与基类没有任何关系。例：

```ts
class Control {
  private state: any
}

interface SelectableControl extends Control { // 接口继承类
  select(): void
}

// Button为Control子类，且要实现SelectableControl接口
class Button extends Control implements SelectableControl {
  select() { }
}

class TextBox extends Control {
  select() { }
}

// Error：“ImageC”类型缺少“state”属性。
class ImageC implements SelectableControl { // 不是Control的子类
  select() { }
}
```

在上面的例子里，SelectableControl 包含了 Control 的所有成员，包括私有成员 state。 因为 state 是私有成员，所以只能够是 Control 的子类们才能实现 SelectableControl 接口。 因为只有 Control 的子类才能够拥有一个声明于Control 的私有成员 state，这对私有成员的兼容性是必需的。

在 Control 类内部，是允许通过 SelectableControl 的实例来访问私有成员 state 的。 实际上，SelectableControl 接口和拥有 select 方法的 Control 类是一样的。Button和 TextBox 类是 SelectableControl 的子类（因为它们都继承自Control 并有 select 方法），但 ImageC 类并不是这样的。

## 类

### 基本示例

```ts
class Greeter {
  greeting: string
  constructor(message: string) {
    this.greeting = message
  }
  greet() {
    return 'Hello, ' + this.greeting
  }
}

let greeter = new Greeter('world')
```

### 继承

简单例子

```ts
class Animal {
  move(distance: number = 0) {
    console.log(`Animal moved ${distance}m.`)
  }
}

class Dog extends Animal {
  bark() {
    console.log('Woof! Woof!')
  }
}

const dog = new Dog()
dog.bark()
dog.move(10)
```

复杂例子

```ts
class Animal {
  name: string
  constructor(name: string) {
    this.name = name
  }
  move(distance: number = 0) {
    console.log(`${this.name} moved ${distance}m.`)
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name) // 派生类包含了一个构造函数，它 必须调用 super()，它会执行基类的构造函数。 而且，在构造函数里访问 this 的属性之前，我们一定要调用 super()
  }
  move(distance: number = 5) {
    console.log('Slithering...')
    super.move(distance)
  }
}

class Horse extends Animal {
  constructor(name: string) {
    super(name) // 派生类包含了一个构造函数，它 必须调用 super()，它会执行基类的构造函数。 而且，在构造函数里访问 this 的属性之前，我们一定要调用 super()
  }
  move(distance: number = 45) {
    console.log('Galloping...')
    super.move(distance)
  }
}

let sam = new Snake('Sammy')
let tom: Animal = new Horse('Tommy') // 即使 tom 被声明为 Animal 类型，但因为它的值是 Horse，调用 tom.move(34) 时，它会调用 Horse 里重写的方法。

sam.move()
tom.move(34)

// Slithering...
// Sammy moved 5m.
// Galloping...
// Tommy moved 34m.
```

### 公共，私有与受保护的修饰符

1. 默认为public

在`typeScript`里，成员都默认为`public`。

```ts
// 重写上述例子，public可以省略
class Animal {
  public name: string
  public constructor(name: string) {
    this.name = name
  }
  public move(distance: number) {
    console.log(`${this.name} moved ${distance}m.`)
  }
}
```

2. private私有属性

当成员被标记成 private 时，它就不能在声明它的类的外部访问。比如：

```ts
class Animal {
  private name: string
  constructor(name: string) {
    this.name = name
  }
}

new Animal('Cat').name // 错误: 'name' 是私有的.
```

```ts
class Animal {
  private name: string
  constructor(name: string) {
    this.name = name
  }
}

class Rhino extends Animal {
  constructor() {
    super('Rhino')
  }
}

class Employee {
  private name: string
  constructor(name: string) {
    this.name = name
  }
}

let animal = new Animal('Goat')
let rhino = new Rhino()
let employee = new Employee('Bob')

animal = rhino
animal = employee // 错误: Animal 与 Employee 不兼容.
```

这个例子中有 Animal 和 Rhino 两个类， Rhino 是 Animal 类的子类。 还有一个 Employee 类，其类型看上去与 Animal 是相同的。 我们创建了几个这些类的实例，并相互赋值来看看会发生什么。 因为 Animal 和 Rhino 共享了来自 Animal 里的私有成员定义 private name: string，因此它们是兼容的。然而 Employee 却不是这样。当把 Employee 赋值给 Animal 的时候，得到一个错误，说它们的类型不兼容。尽管 Employee 里也有一个私有成员 name，但它明显不是 Animal 里面定义的那个。

3. protected

```ts
class Person {
  protected name: string
  constructor(name: string) {
    this.name = name
  }
}

class Employee extends Person {
  private department: string

  constructor(name: string, department: string) {
    super(name)
    this.department = department
  }
  
  getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.` // protected成员在派生类中仍然可以访问
  }
}

let howard = new Employee('Howard', 'Sales')
console.log(howard.getElevatorPitch())
console.log(howard.name) // error，派生类外不能访问
```

构造函数也可以被标记成 protected。 这意味着这个类不能在包含它的类外被实例化，但是能被继承。比如：

```ts
class Person {
  protected name: string
  protected constructor(name: string) { // 构造函数被标记成protected，类就不能被实例化，只能被继承
    this.name = name
  }
}

// Employee 能够继承 Person
class Employee extends Person {
  private department: string

  constructor(name: string, department: string) {
    super(name)
    this.department = department
  }

  public getElevatorPitch() {
    return `Hello, my name is ${this.name} and I work in ${this.department}.`
  }
}

let howard = new Employee('Howard', 'Sales')
let john = new Person('John') // 错误: 'Person' 的构造函数是被保护的.
```

4. 参数属性，简化声明 ↓ (readOnly结尾)

5. tsc编译结果对比

```ts
class People {
  private name: string
  constructor (name: string) {
    this.name = name
  }
}
```

```js
var People = /** @class */ (function () {
    function People(name) {
        this.name = name;
    }
    return People;
}());

```

- 继承的实现

```ts
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
```

```js
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var People = /** @class */ (function () {
    function People(name) {
        this.name = name;
    }
    return People;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student() {
        return _super.call(this, 'bob') || this;
    }
    return Student;
}(People));
new Student();

```

### readOnly

你可以使用 readonly 关键字将属性设置为只读的。 只读属性必须在声明时或构造函数里被初始化。

```ts
class Person {
  readonly name: string
  constructor(name: string) {
    this.name = name
  }
}

let john = new Person('John')
john.name = 'peter' // error
```

在上面的例子中，我们必须在 Person 类里定义一个只读成员 name 和一个参数为 name 的构造函数，并且立刻将 name 的值赋给 this.name，这种情况经常会遇到。

使用参数属性来简化上述例子，参数属性可以方便地让我们在一个地方定义并初始化一个成员。

```ts
class Person {
  constructor(readonly name: string) {
  }
}
```

注意看我们是如何舍弃参数 name，仅在构造函数里使用 readonly name: string 参数来创建和初始化 name 成员。 我们把声明和赋值合并至一处。

参数属性通过给构造函数参数前面添加一个访问限定符来声明。使用 private 限定一个参数属性会声明并初始化一个私有成员；对于 public 和 protected 来说也是一样。

### 存取器

TypeScript 支持通过 getters/setters 来截取对对象成员的访问。 它能帮助你有效的控制对对象成员的访问。

下面来看如何把一个简单的类改写成使用 get 和 set。 首先，我们从一个没有使用存取器的例子开始。

```ts
class Employee {
  fullName: string
}

let employee = new Employee()
employee.fullName = 'Bob Smith'
if (employee.fullName) {
  console.log(employee.fullName)
}
```

我们可以设置 fullName，因为它是 public 的，有时候当我们去修改它的时候触发一些额外逻辑，存取器就派上用场了。

下面这个版本里，我们先检查用户密码是否正确，然后再允许其修改员工信息。我们把对 fullName 的直接访问改成了可以检查密码的 set 方法。 我们也加了一个 get 方法，让上面的例子仍然可以工作。

```ts
let passcode = 'secret passcode'

class Employee {
  private _fullName: string

  get fullName(): string { // 取, 实例.fullName
    return this._fullName
  }

  set fullName(newName: string) { // 赋值, 实例.fullName = 'name'
    if (passcode && passcode === 'secret passcode') {
      this._fullName = newName
    }
    else {
      console.log('Error: Unauthorized update of employee!')
    }
  }
}

let employee = new Employee()
employee.fullName = 'Bob Smith'
if (employee.fullName) {
  console.log(employee.fullName)
}
```

:::tip
对于存取器有下面几点需要注意的：

首先，存取器要求你将编译器设置为输出 ECMAScript 5 或更高。 不支持降级到 ECMAScript 3。其次，只带有 get 不带有 set 的存取器自动被推断为 readonly。
:::

### 静态属性

到目前为止，我们只讨论了类的实例成员，那些仅当类被实例化的时候才会被初始化的属性。 我们也可以创建类的静态成员，这些属性存在于类本身上面而不是类的实例上。 在这个例子里，我们使用 static 定义 origin，因为它是所有网格都会用到的属性。 每个实例想要访问这个属性的时候，都要在 origin 前面加上类名。 如同在实例属性上使用 this.xxx 来访问属性一样，这里我们使用 Grid.xxx 来访问静态属性。

```ts
class Grid {
  static origin = {x: 0, y: 0} // static

  scale: number

  constructor (scale: number) {
    this.scale = scale
  }

  calculateDistanceFromOrigin(point: {x: number; y: number}) { // 具体对象类型(类似简写的接口)
    let xDist = point.x - Grid.origin.x
    let yDist = point.y - Grid.origin.y
    return Math.sqrt(xDist * xDist + yDist * yDist) * this.scale
  }
}

let grid1 = new Grid(1.0)  // 1x scale
let grid2 = new Grid(5.0)  // 5x scale

console.log(grid1.calculateDistanceFromOrigin({x: 3, y: 4}))
console.log(grid2.calculateDistanceFromOrigin({x: 3, y: 4}))
```

以下代码执行结果？

```ts
class Grid {
  static origin = {x: 0, y: 0}

  scale: number

  constructor (scale: number) {
    this.scale = scale
  }

  calculateDistanceFromOrigin(point: {x: number; y: number}) {
    let xDist = point.x - Grid.origin.x
    let yDist = point.y - Grid.origin.y
    return Math.sqrt(xDist * xDist + yDist * yDist) * this.scale
  }
}

let grid1 = new Grid(1.0)  // 1x scale
Grid.origin = {x: 3, y: 4}
let grid2 = new Grid(1.0)  // 1x scale

let grid3 = new Grid(5.0)  // 5x scale

console.log(grid1.calculateDistanceFromOrigin({x: 3, y: 4})) // 0
console.log(grid2.calculateDistanceFromOrigin({x: 3, y: 4})) // 0
console.log(grid3.calculateDistanceFromOrigin({x: 3, y: 4})) // 0
```

上述代码编译之后为:

```js
var Grid = /** @class */ (function () {
    function Grid(scale) {
        this.scale = scale;
    }
    Grid.prototype.calculateDistanceFromOrigin = function (point) {
        var xDist = point.x - Grid.origin.x;
        var yDist = point.y - Grid.origin.y;
        return Math.sqrt(xDist * xDist + yDist * yDist) * this.scale;
    };
    Grid.origin = { x: 0, y: 0 };
    return Grid;
}());
var grid1 = new Grid(1.0); // 1x scale
Grid.origin = { x: 3, y: 4 };
var grid2 = new Grid(1.0); // 1x scale
var grid3 = new Grid(5.0); // 5x scale
console.log(grid1.calculateDistanceFromOrigin({ x: 3, y: 4 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 3, y: 4 }));
console.log(grid3.calculateDistanceFromOrigin({ x: 3, y: 4 }));

```

### 抽象类

抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化。不同于接口，抽象类可以包含成员的实现细节。 abstract 关键字是用于定义抽象类和在抽象类内部定义抽象方法。

```ts
abstract class Animal {
  abstract makeSound(): void
  move(): void {
    console.log('roaming the earth...')
  }
}
```

抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。 抽象方法的语法与接口方法相似，两者都是定义方法签名但不包含方法体。 然而，抽象方法必须包含 abstract 关键字并且可以包含访问修饰符。

```ts
abstract class Department { // 抽象类不能被实例化
  name: string

  constructor(name: string) {
     this.name = name
  }

  printName(): void { // 抽象类中也可以写方法体
    console.log('Department name: ' + this.name)
  }

  abstract printMeeting(): void // 必须在派生类中实现
}

class AccountingDepartment extends Department {
  constructor() {
    super('Accounting and Auditing') // 在派生类的构造函数中必须调用 super()
  }

  printMeeting(): void {
    console.log('The Accounting Department meets each Monday at 10am.')
  }

  generateReports(): void { // 方法在声明的抽象类中不存在 将会报错
    console.log('Generating accounting reports...')
  }
}

let department: Department // 允许创建一个对抽象类型的引用
department = new Department() // 错误: 不能创建一个抽象类的实例
department = new AccountingDepartment() // 允许对一个抽象子类进行实例化和赋值
department.printName()
department.printMeeting()
department.generateReports() // 错误: 方法在声明的抽象类中不存在
```

### 高级技巧

1. 构造函数

当你在 TypeScript 里声明了一个类的时候，实际上同时声明了很多东西。首先就是类的实例的类型。

```ts
class Greeter {
  static standardGreeting = 'Hello, there'
  greeting: string
  constructor(message: string) {
    this.greeting = message
  }
  greet() {
    return 'Hello, ' + this.greeting
  }
}

let greeter: Greeter
greeter = new Greeter('world')
console.log(greeter.greet())
```

我们也创建了一个叫做构造函数的值。 这个函数会在我们使用 new 创建类实例的时候被调用。 下面我们来看看，上面的代码被编译成JavaScript后是什么样子的：

```js
var Greeter = /** @class */ (function () {
  function Greeter(message) {
    this.greeting = message;
  }
  Greeter.prototype.greet = function () {
    return 'Hello, ' + this.greeting;
  };
  Greeter.standardGreeting = 'Hello, there';
  return Greeter;
}());
var greeter;
greeter = new Greeter('world');
console.log(greeter.greet());
```

上面的代码里，var Greeter 将被构造函数赋值。 当我们调用 new 并执行了这个函数后，便会得到一个类的实例。这个构造函数也包含了类的所有静态属性。 换个角度说，我们可以认为类具有实例部分与静态部分这两个部分。

让我们稍微改写一下这个例子，看看它们之间的区别：

```ts
class Greeter {
  static standardGreeting = 'Hello, there'
  
  greeting: string

  constructor(message?: string) {
    this.greeting = message
  }

  greet() {
    if (this.greeting) {
      return 'Hello, ' + this.greeting
    } else {
      return Greeter.standardGreeting
    }
  }
}

let greeter: Greeter
greeter = new Greeter()
console.log(greeter.greet())

let greeterMaker: typeof Greeter = Greeter // greeterMaker变量保存了这个类或者说保存了类构造函数
greeterMaker.standardGreeting = 'Hey there'

let greeter2: Greeter = new greeterMaker()
console.log(greeter2.greet())

```

这个例子里， greeter1 与之前看到的一样。 我们实例化 Greeter类，并使用这个对象。 与我们之前看到的一样。

再之后，我们直接使用类。 我们创建了一个叫做 greeterMaker 的变量。这个变量保存了这个类或者说保存了类构造函数。 然后我们使用 typeof Greeter，意思是取 Greeter 类的类型，而不是实例的类型。或者更确切的说，"告诉我 Greeter 标识符的类型"，也就是构造函数的类型。 这个类型包含了类的所有静态成员和构造函数。 之后，就和前面一样，我们在 greeterMaker 上使用 new，创建 Greeter 的实例。

2. 把类当做接口使用

如上一节里所讲的，类定义会创建两个东西：类的实例类型和一个构造函数。 因为类可以创建出类型，所以你能够在允许使用接口的地方使用类。

```ts
class Point {
  x: number
  y: number
}

interface Point3d extends Point {
  z: number
}

let point3d: Point3d = {x: 1, y: 2, z: 3}
```

## 函数

### 可选参数和默认参数

```ts
function buildName(firstName: string, lastName?: string): string { // 可选参数
  if (lastName)
    return firstName + ' ' + lastName
  else
    return firstName
}

let result1 = buildName('Bob');  // 现在正常了
let result2 = buildName('Bob', 'Adams', 'Sr.')  // Error, 参数过多
let result3 = buildName('Bob', 'Adams')  // OK
```

```ts
function buildName(firstName: string, lastName = 'Smith'): string { // 默认参数
  return firstName + ' ' + lastName
}

let result1 = buildName('Bob')                  // 返回 "Bob Smith"
let result2 = buildName('Bob', undefined)     // 正常, 同样 "Bob Smith"
let result3 = buildName('Bob', 'Adams', 'Sr.')  // 错误, 参数过多
let result4 = buildName('Bob', 'Adams')        // OK
```

### 剩余参数

```ts
function buildName(firstName: string, ...restOfName: string[]): string {
  return firstName + ' ' + restOfName.join(' ')
}

let employeeName = buildName('Joseph', 'Samuel', 'Lucas', 'MacKinzie')
```

### 重载

```ts
let suits = ['hearts', 'spades', 'clubs', 'diamonds']

function pickCard(x: {suit: string; card: number }[]): number
function pickCard(x: number): {suit: string; card: number }

function pickCard(x): any {
  if (Array.isArray(x)) {
    let pickedCard = Math.floor(Math.random() * x.length)
    return pickedCard
  } else if (typeof x === 'number') {
    let pickedSuit = Math.floor(x / 13)
    return { suit: suits[pickedSuit], card: x % 13 }
  }
}

let myDeck = [
  { suit: 'diamonds', card: 2 },
  { suit: 'spades', card: 10 },
  { suit: 'hearts', card: 4 }
]
let pickedCard1 = myDeck[pickCard(myDeck)];
console.log('card: ' + pickedCard1.card + ' of ' + pickedCard1.suit)

let pickedCard2 = pickCard(15)
console.log('card: ' + pickedCard2.card + ' of ' + pickedCard2.suit)
```

## 泛型

泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体的类型，而在使用的时候再指定类型的一种特性。

### 基础示例

不管参数传入任何值，都进行返回。

```ts
// 错误写法
function identity(arg: any): any {
  return arg
}

// 正确应使用泛型
function identity<T>(arg: T): T {
  // 在函数体内使用 arg.length 会报错，因为不知道arg具体类型。 如果入参改为 arg: T[]，就可以调用length，可以理解为数组长度
  // 正确处理方式应该为泛型约束，可以看下面解释
  return arg
}

let output = identity<string>('myString') // 这里我们明确的指定了 T 是 string 类型，并做为一个参数传给函数，使用了 <> 括起来而不是 ()。

// 或

let output = identity('myString')

// 注意我们没必要使用尖括号（<>）来明确地传入类型；编译器可以查看 myString 的值，然后把 T 设置为它的类型。
// 如果编译器不能够自动地推断出类型的话，只能像上面那样明确的传入 T 的类型，在一些复杂的情况下，这是可能出现的。
```

### 泛型接口

```ts
interface GenericIdentityFn {
  <T>(arg: T): T
}

function identity<T>(arg: T): T {
  return arg
}

let myIdentity: GenericIdentityFn = identity
```

优化

```ts
interface GenericIdentityFn<T> {
  (arg: T): T
}

function identity<T>(arg: T): T {
  return arg
}

let myIdentity: GenericIdentityFn<number> = identity
```

### 泛型类

```ts
class GenericNumber<T> {
  zeroValue: T
  add: (x: T, y: T) => T
}

let myGenericNumber = new GenericNumber<number>()
myGenericNumber.zeroValue = 0
myGenericNumber.add = function(x, y) {
  return x + y
}

let stringNumeric = new GenericNumber<string>()
stringNumeric.zeroValue = ''
stringNumeric.add = function(x, y) {
  return x + y
}
```

### 泛型约束

```ts
function loggingIdentity<T>(arg: T): T {
  console.log(arg.length) // 上述会报错的例子
  return arg
}
```

解决方法： 泛型约束，我们定义一个接口来描述约束条件，创建一个包含 .length 属性的接口，使用这个接口和 extends 关键字来实现约束：

```ts
interface Lengthwise {
  length: number
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length) // OK
  return arg
}

// 现在这个泛型函数被定义了约束，因此它不再是适用于任意类型：
loggingIdentity(3);  // Error
loggingIdentity({length: 10, value: 3}) // OK
```

#### 在泛型约束中使用类型参数

你可以声明一个类型参数，且它被另一个类型参数所约束。 比如，现在我们想要用属性名从对象里获取这个属性。 并且我们想要确保这个属性存在于对象 obj 上，因此我们需要在这两个类型之间使用约束。

```ts
function getProperty<T, K extends keyof T> (obj: T, key: K ) {
  return obj[key]
}

let x = {a: 1, b: 2, c: 3, d: 4}

getProperty(x, 'a') // okay
getProperty(x, 'm') // error
```

## 类型推论

如果没有明确的指定类型，那么 TypeScript 会依照类型推论（Type Inference）的规则推断出一个类型。

### 什么是类型推论

以下代码虽然没有指定类型，但是会在编译的时候报错：

```ts
let myFavoriteNumber = 'seven';
myFavoriteNumber = 7;

// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.
```

事实上，它等价于：

```ts
let myFavoriteNumber: string = 'seven';
myFavoriteNumber = 7;

// index.ts(2,1): error TS2322: Type 'number' is not assignable to type 'string'.
```

TypeScript 会在没有明确的指定类型的时候推测出一个类型，这就是类型推论。

如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成 any 类型而完全不被类型检查：

```ts
let myFavoriteNumber;
myFavoriteNumber = 'seven';
myFavoriteNumber = 7;
```

## 高级类型

### 交叉类型

交叉类型是将多个类型合并为一个类型。 这让我们可以把现有的多种类型叠加到一起成为一种类型，它包含了所需的所有类型的特性。 例如，Person & Loggable 同时是 Person 和 Loggable。 就是说这个类型的对象同时拥有了这两种类型的成员。

我们大多是在混入（mixins）或其它不适合典型面向对象模型的地方看到交叉类型的使用。 （在 JavaScript 里发生这种情况的场合很多！） 下面是如何创建混入的一个简单例子：

```ts
function extend<T, U> (first: T, second: U): T & U {
  let result = {} as T & U
  for (let id in first) {
    result[id] = first[id] as any
  }
  for (let id in second) {
    if (!result.hasOwnProperty(id)) {
      result[id] = second[id] as any
    }
  }
  return result
}

class Person {
  constructor (public name: string) {
  }
}

interface Loggable {
  log (): void
}

class ConsoleLogger implements Loggable {
  log () {
    // ...
  }
}

var jim = extend(new Person('Jim'), new ConsoleLogger())
var n = jim.name
jim.log()
```

### 类型别名

类型别名用来给一个类型起个新名字。

```ts
// 使用 type 创建类型别名
type Name = string;
type NameResolver = () => string;
type NameOrResolver = Name | NameResolver;
function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') {
        return n;
    } else {
        return n();
    }
}
```

### 联合类型

联合类型与交叉类型很有关联，但是使用上却完全不同。 偶尔你会遇到这种情况，一个代码库希望传入 number 或 string 类型的参数。 例如下面的函数：

```ts
function padLeft(value: string, padding: any) {
  if (typeof padding === 'number') {
    return Array(padding + 1).join(' ') + value
  }
  if (typeof padding === 'string') {
    return padding + value
  }
  throw new Error(`Expected string or number, got '${padding}'.`)
}

padLeft('Hello world', 4) // returns "    Hello world"

let indentedString = padLeft('Hello world', true) // 编译阶段通过，运行时报错
```

padLeft 存在一个问题，padding 参数的类型指定成了 any。 这就是说我们可以传入一个既不是 number 也不是 string 类型的参数，但是 TypeScript 却不报错。

```ts
function padLeft(value: string, padding: string | number) { // 联合类型
  // ...
}

let indentedString = padLeft('Hello world', true) // 编译阶段报错
```

如果一个值是联合类型，我们只能访问此联合类型的所有类型里共有的成员。

```ts
interface Bird {
  fly()
  layEggs()
}

interface Fish {
  swim()
  layEggs()
}

function getSmallPet(): Fish | Bird {
  // ...
}

let pet = getSmallPet()
pet.layEggs() // okay 共有
pet.swim()    // error 非共有
```

### 类型保护

联合类型适合于那些值可以为不同类型的情况。 但当我们想确切地了解是否为 Fish 或者是 Bird 时怎么办？ JavaScript 里常用来区分这 2 个可能值的方法是检查成员是否存在。如之前提及的，我们只能访问联合类型中共同拥有的成员。

```ts
interface Bird {
  fly()
  layEggs()
}

interface Fish {
  swim()
  layEggs()
}

function getSmallPet(): Fish | Bird {
  // ...
}

let pet = getSmallPet()

// 每一个成员访问都会报错
if (pet.swim) {
  pet.swim()
} else if (pet.fly) {
  pet.fly()
}
```

为了让这段代码工作，我们要使用类型断言：

```ts
let pet = getSmallPet()

if ((pet as Fish).swim) {
  (pet as Fish).swim()
} else {
  (pet as Bird).fly()
}
```

1. 用户自定义的类型保护

这里可以注意到我们不得不多次使用类型断言。如果我们一旦检查过类型，就能在之后的每个分支里清楚地知道 pet 的类型的话就好了。

TypeScript 里的类型保护机制让它成为了现实。 类型保护就是一些表达式，它们会在运行时检查以确保在某个作用域里的类型。定义一个类型保护，我们只要简单地定义一个函数，它的返回值是一个类型谓词：

```ts
// 在这个例子里，pet is Fish 就是类型谓词。谓词为 parameterName is Type 这种形式， parameterName 必须是来自于当前函数签名里的一个参数名。
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined
}

if (isFish(pet)) {
  pet.swim()
} else {
  pet.fly()
}
// TypeScript 不仅知道在 if 分支里 pet 是 Fish 类型；它还清楚在 else 分支里，一定不是 Fish类型而是 Bird 类型。
```

2. typeof 类型保护

```ts
function padLeft (value: string, padding: string | number) {
  if (typeof padding === 'number') {
    return Array(padding + 1).join(' ') + value
  }
  if (typeof padding === 'string') {
    return padding + value
  }
  throw new Error(`Expected string or number, got '${padding}'.`)
}
```

3. instanceof 类型保护

```ts
class Bird {
  fly () {
    console.log('bird fly')
  }

  layEggs () {
    console.log('bird lay eggs')
  }
}

class Fish {
  swim () {
    console.log('fish swim')
  }

  layEggs () {
    console.log('fish lay eggs')
  }
}

function getRandomPet () {
  return Math.random() > 0.5 ? new Bird() : new Fish()
}

let pet = getRandomPet()

if (pet instanceof Bird) {
  pet.fly()
}
if (pet instanceof Fish) {
  pet.swim()
}
```

### null与undefined可赋值给任何类型

TypeScript 具有两种特殊的类型，null 和 undefined，它们分别具有值 null 和 undefined。我们在基础类型一节里已经做过简要说明。 默认情况下，类型检查器认为 null 与 undefined 可以赋值给任何类型。 null 与 undefined 是所有其它类型的一个有效值。 这也意味着，你阻止不了将它们赋值给其它类型，就算是你想要阻止这种情况也不行。

--strictNullChecks 标记可以解决此错误：当你声明一个变量时，它不会自动地包含 null 或 undefined。 你可以使用联合类型明确的包含它们：

```ts
let s = 'foo'
s = null // 错误, 'null'不能赋值给'string'
let sn: string | null = 'bar'
sn = null // 可以

sn = undefined // error, 'undefined'不能赋值给'string | null'
```

:::tip
按照 JavaScript 的语义，TypeScript 会把 null 和 undefined 区别对待。string | null，string | undefined 和 string | undefined | null 是不同的类型。
:::

### 可选参数和可选属性

使用了 --strictNullChecks，可选参数会被自动地加上 | undefined:

```ts
function f(x: number, y?: number) {
  return x + (y || 0)
}
f(1, 2)
f(1)
f(1, undefined)
f(1, null) // error, 'null' 不能赋值给 'number | undefined'
```

可选属性也会有同样的处理：

```ts
class C {
  a: number
  b?: number
}
let c = new C()
c.a = 12
c.a = undefined // error, 'undefined' 不能赋值给 'number'
c.b = 13
c.b = undefined // ok
c.b = null // error, 'null' 不能赋值给 'number | undefined'
```

### 类型保护和类型断言

由于可以为 null 的类型能和其它类型定义为联合类型，那么你需要使用类型保护来去除 null。幸运地是这与在 JavaScript 里写的代码一致：

```ts
function f(sn: string | null): string {
  if (sn === null) {
    return 'default'
  } else {
    return sn
  }
}

function f(sn: string | null): string {
  return sn || 'default'
}
```

如果编译器不能够去除 null 或 undefined，你可以使用类型断言手动去除。语法是添加 ! 后缀： identifier! 从 identifier 的类型里去除了 null 和 undefined：

```ts
function broken(name: string | null): string {
  function postfix(epithet: string) {
    return name.charAt(0) + '.  the ' + epithet // error, 'name' 可能为 null
  }
  name = name || 'Bob'
  return postfix('great')
}

function fixed(name: string | null): string {
  function postfix(epithet: string) {
    return name!.charAt(0) + '.  the ' + epithet // ok 添加"!"后缀
  }
  name = name || 'Bob'
  return postfix('great')
}

broken(null)

```

### 字符串字面量类型

```ts
type Easing = 'ease-in' | 'ease-out' | 'ease-in-out' // 字符串字面量类型都是使用 type 进行定义。

class UIElement {
  animate (dx: number, dy: number, easing: Easing) {
    if (easing === 'ease-in') {
      // ...
    } else if (easing === 'ease-out') {
    } else if (easing === 'ease-in-out') {
    } else {
      // error! 不能传入 null 或者 undefined.
    }
  }
}

let button = new UIElement()
button.animate(0, 0, 'ease-in')
button.animate(0, 0, 'uneasy') // error
```

全文完
