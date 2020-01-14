--- 
title: 一个关于原型、变量/函数提升、this指向的面试题
date: 2020-01-14
sidebar: 'auto'
categories: 
 - 短篇博文
tags: 
 - knowledge
 - 面试题
publish: true
---

<!-- more -->

## 题目

```js
// 浏览器环境
function num() {
  log = function() { console.log(1) }
  return this
}
num.log = function() { console.log(2) }
num.prototype.log = function() { console.log(3) }
var log = function() {
  console.log(4)
}
function log() {
  console.log(5)
}

num.log() // 2
log() // 4
num().log() // 1
log() // 1
new num.log() // 2
new num().log() // 3
new new num().log() // 3
```

答案： `2411233`

解析：

### 考点一：原型

`num.log` 和 `num.prototype.log` 的区别

先看一段es6的类的代码，然后通过`tsc`(typescript)编译

```ts
class num {
  static log1 = () => { console.log(1) } // 静态方法
  log2 = () => { console.log(2) }
}

num.log1() // 静态方法
new num().log2() // 实例方法
```

编译之后为：

```js
var num = /** @class */ (function() {
  function num() {
    this.log2 = function() { console.log(2) } // 实例方法
  }
  num.log1 = function() { console.log(1) } // 静态方法
  return num
}())
num.log1()
new num().log2()
```

可以通过`prototyoe`实现实例方法`log3`，等同于`log2`(和log2调用方法一致)

```js
var num = /** @class */ (function() {
  function num() {
    this.log2 = function() { console.log(2) } // 实例方法
  }
  num.log1 = function() { console.log(1) } // 静态方法
  num.prototype.log3 = function() { console.log(3) } // num对象的实例方法 等同于log2的写法
  return num
}())
num.log1()
new num().log2()
new num().log3()
```

又有新疑问，如下代码，结果又会是什么呢？

```js
var num = /** @class */ (function() {
  function num() {
    this.log2 = function() { console.log(2) }
    this.log3 = function() { console.log('内部: 3') }
  }
  num.log1 = function() { console.log(1) }
  num.prototype.log3 = function() { console.log('外部: 3') }
  return num
}())

new num().log3()
```

结果为`内部: 3`，为什么呢？我们看一下`new`运算符的原生实现

```js
function create() {
  let obj = {}
  let Con = [].shift.call(arguments)
  obj.__proto__ = Con.prototype // 实例方法挂载在原型链上
  let result = Con.apply(obj, arguments) // 在new中执行了一次构造函数
  return result instanceof Object ? result : obj
}
```

总结：

:::tip
使用obj.prototype.function的形式，相当于实例方法，需要通过new调用；
使用obj.function的形式，相当于静态方法，不需要通过new调用
:::

### 考点二：变量/函数提升

先来一个例子

```js
var a = 1
function a() { }

function b() { }
var b = 1

console.log(a)
console.log(b)
```

输出答案皆为`1`

:::tip
不管是先声明了变量或先声明了函数，函数的都先进行提升，然后才做变量提升，所以变量的形式会覆盖函数的形式。
:::

```js
var log = function() {
  console.log(4)
}
function log() { // 上移至var log上方，不影响结果
  console.log(5)
}

log() // 无论顺序，结果都为4
```

所以上述代码，两个log定义的方式无论谁先谁后，结果都是输出`var`变量声明的形式。

### 考点三: this指向

```js
function num() {
  log = function() { console.log(1) } // 2.给log变量重新赋值
  return this
}

var log = function() { // 1.变量提升
  console.log(4)
}

num().log() // 3.在执行num()的时候，会对log变量重新赋值
```

直接执行函数，本例`this`的指向为`window`（原因参考下方例子foo）。
所以执行`num()`之后`return`的为`window`，所以相当于调用`window.log()`

> 转自`前端面试之道`，this指向问题

```js
function foo() {
  console.log(this.a)
}
var a = 1
foo()

const obj = {
  a: 2,
  foo: foo
}
obj.foo()

const c = new foo()
```

接下来我们一个个分析上面几个场景

- 对于直接调用`foo`来说，不管`foo`函数被放在了什么地方，`this`一定是`window`
- 对于`obj.foo()`来说，我们只需要记住，谁调用了函数，谁就是 `this`，所以在这个场景下`foo`函数中的`this`就是`obj`对象
- 对于`new`的方式来说，`this`被永远绑定在了`c`上面，不会被任何方式改变`this`

说完了以上几种情况，其实很多代码中的`this`应该就没什么问题了，下面让我们看看箭头函数中的`this`

```js
function a() {
  return () => {
    return () => {
      console.log(this)
    }
  }
}
console.log(a()()())
```

首先箭头函数其实是没有`this`的，箭头函数中的`this`只取决包裹箭头函数的第一个普通函数的`this`。在这个例子中，因为包裹箭头函数的第一个普通函数是`a`，所以此时的`this`是 window。**另外对箭头函数使用`bind`这类函数是无效的**。

最后种情况也就是`bind`、`call`这些改变上下文的API了，对于这些函数来说，`this`取决于第一个参数，如果第一个参数为空，那么就是 window。不管我们给函数 bind 几次，fn 中的 this 永远由第一次 bind 决定。

### 考点四：连续new

new的原生实现可以看上方考点一(`create`)

```js
// 浏览器环境
function num() {
  log = function() { console.log(1) }
  return this
}
num.log = function() { console.log(2) }
num.prototype.log = function() { console.log(3) }

new num.log() // 2
new num().log() // 3
new new num().log() //3
```

1. `new num.log()`

num没有打括号，优先级小于`num.log()`，相当于实例化`num.log`对象。
`num.log`为静态方法，具体参考考点一

2. `new num().log()`

参考考点一，执行实例方法。

3. new连续(优先级问题)

```js
function num() {
  console.log('num')
}

num.prototype.log = function() {
  console.log('num.log')
}

new new num().log()
// num
// num.log
```

`new new num().log()`等同于`new ((new num()).log())`

```js
var num1 = new num()
var log = new num1.log()
```
