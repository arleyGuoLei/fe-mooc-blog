--- 
title: React最佳实践
date: 2021-07-06
sidebar: 'auto'
categories: 
 - 短篇博文
tags: 
 - 笔记
publish: true
---

<!-- more -->

## 组件实践

- 避免使用`renderXXXXX`函数来提取组件，这样render出来的模块耦合度和父组件较高，使用了同样的state和props，应创建含独立`props`的组件
- 使用`propTypes`来定义组件的props类型，[详细文档](https://zh-hans.reactjs.org/docs/typechecking-with-proptypes.html#gatsby-focus-wrapper)

```js
import PropTypes from 'prop-types'

class Switch {
  static propTypes = {
    children: PropTypes.node,
    type: PropTypes.string.isRequired,
    updateActiveTrigger: PropTypes.func.isRequired,
    titleActive: PropTypes.bool
  }
}

// OR

const Switch = (props) => {

}

Switch.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string.isRequired,
  updateActiveTrigger: PropTypes.func.isRequired,
  titleActive: PropTypes.bool
}
```

- 使用`property initialzer`来初始化React Class组件的state

```js
class C extends React.Component {

  // 会被babel塞到构造函数中初始化
  state = {
    name: 'arley'
  }
}
```

- 在JSX中的函数`Props`尽量使用类成员函数，不要使用内联函数，内联函数在每一次render都会产生新的函数对象，且传给子组件的props每次都是一个新对象

```js
<Button 
  onClick={() => {}} // 内联形式
/>

constructor (props) {
  this.onClick = this.onClick.bind(this) // 通常处理方法：在构造函数中对原函数通过bind进行this绑定，并且用新函数覆盖原函数

  this.onClick = ::this.onClick // bind(this)的语法糖，需要配置babel
}

class {
  // 最好的方法，使用属性初始化来创建成员函数
  onClick = () => {}

  // Bad，this指向需要用bind来绑定
  onClick() {

  }
}
```

- 使用解构赋值来接受`props`值
- 每个组件应该都有一个独立文件，别把多个组件写到同一个文件内
- 回调类型的函数props，可以加上统一前缀，比如`on`
- 保持接口小，`props`数量要少
- 把`state`尽量往上层组件提
- 类组件中的构造函数，使用`super(...arguments)`来传参调用React组件构造函数

```js
class X {
  constructor (props, context) {
    super(props, context) // 老版本

    super(props) // 新版本react，不需要传递context

    super(...arguments) // 最佳实践，无论react怎么改变参数，都可以正常使用

    // 构造函数中初始化state，尽量使用property initialzer来初始化state
    this.state = {

    }
  }
}
```

- 组件style静态样式抽离为对象，不要直接写在JSX中，不然每次渲染都会创建新对象

```js
render() {
  // Bad
  return <div style={{ height: '25px', width: '100vw' }} />
}

// 避免每次渲染重新构建新对象
const style = { height: '25px', width: '100vw' };
render() {
  return <div style={style} />
}
```

## 组件设计模式

### 聪明组件 和 傻瓜组件

- 聪明组件：容器组件/胖组件/有状态组件，含获取和处理数据的逻辑
- 傻瓜组件：展示组件/瘦组件/无状态组件，仅含渲染逻辑

### React.PureComponent(类组件) && React.memo(函数组件)

类组件含有`shouldComponentUpdate`生命周期，在每次render前会被调用，如果`shouldComponentUpdate`返回`true`，那就继续render，否则取消render更新

React在`shouldComponentUpdate`中封装了`props`浅层比较为PureComponent，如果`props`是一个深层对象，深层属性变化的情况下`PureComponent`组件将不会重新渲染。**所以如果`props`是深层对象，且继承PureComponent，很容易出现BUG**

`React.memo`第二个参数为比较方法，可以拿到props

### 高阶组件(HOC)

官网文档：[https://zh-hans.reactjs.org/docs/higher-order-components.html#gatsby-focus-wrapper](https://zh-hans.reactjs.org/docs/higher-order-components.html#gatsby-focus-wrapper)

`高阶组件`名为「组件」，实际上并不是组件，而是一个函数。这个函数接受任意个数组件作为参数，并且能返回一个全新的组件作为结果。

```js
const widthNoThing = (component) => {
  const newComponent = (props) => {
    return <Component {...props} />
  }

  return newComponent
}
```

- 高阶组件不能去修改作为参数的组件，高阶组件必须为一个纯函数，不应该有任何副作用
- 高阶组件返回一个新的React组件，这个组件的JSX部分肯定会有引用传入的组件
- 高阶组件一般需要把传给自己的props传递给作为参数的组件
- 高阶组件可以传入多个组件作为参数

- 高阶组件可以多个组合使用

```js
const superX = withThree(withTwo(withOne(X)))

// => 函数式编程思想，使用compose优化写法

const hoc = compose(withTree, withTwo, withOne)
const superX = hoc(X)
```

compose简单实现

```js
function compose(...fns) {
  return function(...arg){
    return fns.reduce((acc, cur) => {
        // 第一次acc是函数，之后是结果，所以要加个判断
        return typeof acc === 'function' ? cur(acc(...arg)) : cur(acc)
    })
  }
}

//使用箭头函数优化
​
const compose = (...fns) => (...args) => fns.reduce((acc, cur) => typeof acc === 'function' ? cur(acc(...args)) : cur(acc))
```

- 不要滥用HOC

### render props

官方文档：[https://zh-hans.reactjs.org/docs/render-props.html#gatsby-focus-wrapper](https://zh-hans.reactjs.org/docs/render-props.html#gatsby-focus-wrapper)

render props和HOC的区别，`render props`是一个真正的React组件，而不是一个返回组件的函数。

### 提供者模式

解决跨级信息传递，Context

- 提供者: Provider
- 消费者: Consumer

分为[`16.3`之前的版本](https://zh-hans.reactjs.org/docs/legacy-context.html)(已废弃)，和`16.3`之后的版本(正式版-render props)，`16.7`版本又做了一次升级(不需要使用render props)

### 组合组件

以`Tab栏`和`Tab Item`为例子，开发关联成对的组件，可以考虑该方案

```jsx
// 非组合组件，简单实现，需要传入props，接收子组件点击事件
<Tab>
  <TabItem active={true} onClick={/**/} />
  <TabItem active={false} onClick={/**/} />
  <TabItem active={false} onClick={/**/} />
</Tab>
```

#### 实现目标

```jsx
// 组合组件，不传递props和事件，实现Tab Item的选中
<Tab>
  <TabItem />
  <TabItem />
  <TabItem />
</Tab>
```

#### 实现方式

```jsx
// TabItem照常实现

const TabItem = (props) => {
  const {active, onClick} = props

  const tabStyle = {
    color: active ? 'red' : 'yellow'
  }

  return (
    <h1
      style={tabStyle}
      onClick={onClick}
    >
      {props.children}
    </h1>
  )
}
```

```jsx
// Tab组件不直接渲染Tab Item，而是复制一份子组件，并在上面添加属性实现传递props

class Tab extends React.Component {
  state = {
    activeIndex: 0
  }

  render() {
    const newChildren = React.Children.map(this.props.children, (child, index) => {
      if (child.type) {
        return React.cloneElement(child, {
          active: this.state.activeIndex === index,
          onClick: () => this.setState({activeIndex: index})
        })
      } else {
        return child
      }
    })
    return (
      <>
        {newChildren}
      </>
    )
  }
}
```

- `React.Children.map`: 遍历Children中的所有元素
- `React.cloneElement`: 可以复制某个元素，第一个参数是复制的元素，第二个参数可以增加新的props

## React 状态管理

### React自身状态管理

#### 判断一个数据应该放在`props`还是`state`，或者成员变量，可按照以下规则

- 如果数据由外部传入，放入`props`中
- 如果组件是内部状态，这个状态是否需要响应式，需要放入state，不需要放入成员变量

#### 其他

- 更改React State，不能直接修改state对象，需要调用setState
- setState是异步的，会收集多个修改，合并set
- setState第二个参数，是值真的更新后的回调函数
- setState第一个参数也可以传入一个函数，`(state, props) => {}`

### Redux

- 文档: [http://cn.redux.js.org/](http://cn.redux.js.org/)，通过action触发reducer来更新Store
- Redux异步: `Redux-Saga`、`Redux-thunk`，终极方案React自身实现的[`Suspense`](https://github.com/facebook/react/issues/15201)

## React SSR

React 16 之前

```js
import React from 'react'
import ReactDomServer from 'react-dom/server'

const html = ReactDomServer.renderToString(<Hello />)
```

从v16开始，建议使用`renderToNodeStream`代替`renderToString`，把渲染结果以流的形式传递给浏览器，进一步改进第一次有意义渲染时间; 用`React.render`代替`React.hydrate`

### 脱水和注水

一定要让服务端塞给组件的数据和浏览器端一致，为了实现这一目的，必须把服务端传给React组件的数据保留住，随着HTML一起返回给浏览器，这个过程叫做**脱水**。在浏览器端，就直接拿这个服务端返回的数据来渲染，这个过程叫做**注水**。

### 实现服务端渲染的难点

- 服务端和客户端渲染一致，数据一致
- 路由、SPA，每个页面需要既支持服务端渲染，又支持客户端渲染

### Next.js

- `getIntailProps`是Next.js的最伟大发明，在该函数中获取AJAX异步数据

## React Router

[v5文档](https://juejin.cn/post/6844904093694033927)
[v5 hooks](https://segmentfault.com/a/1190000039190541)

- React rouer包括`react-router-dom`(浏览器) 和 `react-router-native` (RN)两个版本
- `Router`提供者，`Route`消费者
- `BrowserRouter` 和 `HashRouter`
- `Link`、`Switch`组件

## React 测试

- Jest：为每一个测试文件提供一个独立的测试环境
- Mocha: 多测试文件公用一个测试环境，全局变量容易出问题，尽量选择Jest

- 组件测试: enzyme
