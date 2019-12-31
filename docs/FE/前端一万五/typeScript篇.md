---
title: 前端一万五 - typeScript篇
date: 2019-12-30T07:53:55.626Z
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
