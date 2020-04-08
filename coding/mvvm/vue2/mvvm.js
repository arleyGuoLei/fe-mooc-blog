// 利用JavaScript 单进程特点
class Dep {
  constructor() {
    this.subs = [] // 存放所有的 Watcher
  }
  // 订阅
  addSub(watcher) { // 添加 Watcher
    this.subs.push(watcher)
  }
  // 发布
  notify() {
    this.subs.forEach(watcher => watcher.update())
  }
}

// 观察者模式 （发布订阅）
class Watcher {
  constructor(vm, expr, cb) {
    this.vm = vm
    this.expr = expr
    this.cb = cb
    // 默认先存放一个老值
    this.oldValue = this.get()
  }
  get() { // vm.$data.school  vm.$data.school.name
    Dep.target = this // 先把自己放在this 上
    // 取值，把这个 观察者和数据 关联起来
    const value = CompileUtil.getVal(this.vm, this.expr)
    Dep.target = null
    return value
  }
  // 更新操作 数据变化之后，会调用观察者的update 方法
  update() {
    const newValue = CompileUtil.getVal(this.vm, this.expr)
    if (newValue !== this.oldValue) {
      this.cb(newValue)
    }
  }
}
// vm.$watch(vm,'school.name',(newValue)=>{

// })

// 实现数据劫持
class Observer {
  constructor(data) {
    // console.log(data)
    this.observer(data)
  }
  observer(data) {
    if (data && typeof data === 'object') {
      // 如果是对象
      for (const key in data) {
        this.defineReactive(data, key, data[key])
      }
    } else {

    }
  }
  defineReactive(obj, key, value) {
    // 递归遍历对象
    this.observer(value)
    const dep = new Dep() // 给每一个属性 都加上一个具有发布订阅的功能
    Object.defineProperty(obj, key, {
      get() {
        // 创建watcher 时，会取到对应的内容，并且把 watcher 放到了全局上
        Dep.target && dep.addSub(Dep.target)
        return value
      },
      set: (newValue) => { // school = {}  箭头函数 解决 this
        if (newValue != value) {
          this.observer(newValue)
          value = newValue
          dep.notify()
        }
      }
    })
  }
}

// 基础类 调度
class Compiler {
  constructor(el, vm) {
    // 判断 el 属性 是不是元素 如果不是元素就获取
    this.el = this.isElementNode(el) ? el : document.querySelector(el)
    console.log(this.el)
    // 把当前节点的元素 获取到 放到内存中
    this.vm = vm
    const fragment = this.node2fragment(this.el)
    console.log(fragment)

    // 把节点内容 进行替换

    // 编译模板  用数据编译
    this.compile(fragment)
    // 把内容放到页面中
    this.el.appendChild(fragment)
  }
  isDirective(attrName) {
    return attrName.startsWith('v-')
  }
  // 编译元素
  compileElement(node) {
    const attributes = node.attributes; // 类数组
    // console.log('---',attributes)
    [...attributes].forEach(attr => { // type="text" v-model="school.name"
      // console.log(attr)
      const {
        name,
        value: expr
      } = attr
      if (this.isDirective(name)) { // v-model v-html v-bind
        console.log(node, 'element')
        const [, directive] = name.split('-')
        // v-on:click
        const [directiveName, eventName] = directive.split(':')
        // 调用不同的指令来处理
        CompileUtil[directiveName](node, expr, this.vm, eventName)
      }
    })
  }
  // 编译文本
  compileText(node) { // 判断当前文本节点是否包含 {{}}
    const content = node.textContent
    // console.log(content,'text')
    if (/\{\{(.+?)\}\}/.test(content)) {
      // console.log(content,'text')        // 找到所有文本
      // 文本节点
      CompileUtil['text'](node, content, this.vm) // {{a}} {{b}}
    }
  }
  // 【核心编译方法】编译内存中的dom节点
  compile(node) {
    const childNodes = node.childNodes;
    // console.log(childNodes);
    [...childNodes].forEach(child => {
      if (this.isElementNode(child)) {
        // console.log('element',child)
        this.compileElement(child)
        // 如果是元素的话  再去遍历 子节点 【递归】
        this.compile(child)
      } else {
        // console.log('text',child)
        this.compileText(child)
      }
    })
  }
  // 把当前节点的元素 获取到 放到内存中
  node2fragment(node) {
    // 创建文档碎片
    const fragment = document.createDocumentFragment()
    let firstChild
    while (firstChild = node.firstChild) {
      // console.log(firstChild)
      // appendChild 具有移动性  移动元素到内存
      fragment.appendChild(firstChild)
    }
    return fragment
  }
  // 判断是否元素节点
  isElementNode(node) {
    return node.nodeType === 1
  }
}

CompileUtil = {
  // 根据表达式 获取对应的数据
  getVal(vm, expr) { // vm.$data  'school.name'  [school,name]
    // console.log(vm.$data)
    return expr.split('.').reduce((data, current) => {
      return data[current]
    }, vm.$data)
  },
  setValue(vm, expr, value) { // vm.$data => [ expr => school.name ] = 姜文
    return expr.split('.').reduce((data, current, index, arr) => {
      if (index == arr.length - 1) {
        return data[current] = value
      }
      return data[current]
    }, vm.$data)
  },
  // 解析 v-model 指令
  model(node, expr, vm) { // node 节点，expr表达式，vm当前实例  school.name  <---  vm.$data
    // 给输入框赋予 value 属性 node.value = xxx;
    const fn = this.updater['modelUpdater']
    // 给输入框 加一个 观察者，稍后数据更新了 触发此方法，赋予新值
    new Watcher(vm, expr, (newValue) => {
      fn(node, newValue)
    })
    // 监听用户输入
    node.addEventListener('input', (e) => {
      const value = e.target.value // 获取用户输入的值
      this.setValue(vm, expr, value)
    })
    const value = this.getVal(vm, expr) // 珠峰
    fn(node, value)
  },
  // 解析 v-on:click="change" 类似的 函数执行
  on(node, expr, vm, eventName) { // v-on:click="change"
    node.addEventListener(eventName, (e) => {
      vm[expr].call(vm, e) // this.change
    })
  },
  html(node, expr, vm) { // expr v-html="message"
    // node.innerHTML = xxx;
    const fn = this.updater['htmlUpdater']
    new Watcher(vm, expr, (newValue) => {
      fn(node, newValue)
    })
    const value = this.getVal(vm, expr)
    fn(node, value)
  },
  getContentValue(vm, expr) {
    // 遍历表达式 将内容 替换为完整的内容 返回回去
    return expr.replace(/\{\{(.+?)\}\}/g, (...args) => {
      return this.getVal(vm, args[1])
    })
  },
  text(node, expr, vm) { // expr => {{a}} {{b}} {{c}} => a b
    const fn = this.updater['textUpdater']
    const content = expr.replace(/\{\{(.+?)\}\}/g, (...args) => {
      // 给每个 表达式 {{}} 都加上观察者
      new Watcher(vm, args[1], (newValue) => {
        fn(node, this.getContentValue(vm, expr)) // 返回了一个 全的字符串
      })
      return this.getVal(vm, args[1])
    })
    fn(node, content)
  },
  updater: {
    // 把数据插入到 dom 节点
    modelUpdater(node, value) {
      node.value = value
    },
    htmlUpdater(node, value) { // xss攻击
      node.innerHTML = value
    },
    // 处理文本节点
    textUpdater(node, value) {
      node.textContent = value
    }
  }
}

class Vue {
  constructor(options) {
    // this.$el  $data  $options
    this.$el = options.el
    this.$data = options.data
    const computed = options.computed
    const methods = options.methods

    // 根元素存在 编译模板
    if (this.$el) {
      // 把数据全部转换成 Object.definePorperty 定义
      new Observer(this.$data)

      // computed 部分
      for (const key in computed) { // 有依赖关系，数据
        Object.defineProperty(this.$data, key, {
          get: () => {
            return computed[key].call(this)
          }
        })
      }

      // methods部分
      for (const key in methods) {
        Object.defineProperty(this, key, {
          get() {
            return methods[key]
          }
        })
      }

      // 把数据获取操作 vm上的取值操作 代理到 vm.$data
      this.proxyVm(this.$data)

      // 编译
      new Compiler(this.$el, this)
    }
  }
  // 代理  一层代理  可以通过 vm 取到对应的内容
  proxyVm(data) {
    for (const key in data) {
      Object.defineProperty(this, key, {
        get() {
          return data[key] // 进行转换操作
        },
        set(newValue) {
          data[key] = newValue
        }
      })
    }
  }
}
