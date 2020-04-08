// vue3 响应式原理
// vue2 1.默认会递归  2.数组改变length 无效  3.对象不存在的属性不能被拦截

// proxy 兼容性差  IE11 不兼容

// hash表 映射表
const toProxy = new WeakMap() // 若引用映射表 es6  放置原对象 ：代理过的对象
const toRaw = new WeakMap() // 代理过的对象 ：原对象

// 判断是否对象
function isObject(target) {
  return typeof target === 'object' && target !== null
}

// 1.响应式核心方法
function reactive(target) {
  // 创建响应式对象
  return creativeReactiveObject(target)
}

// 判断属性
function hasOwn(target, key) {
  return target.hasOwnProperty(key)
}

function creativeReactiveObject(target) {
  // Reflect 不会报错 有返回值 后期替换 Object 上面的办法
  if (!isObject(target)) {
    return target
  }
  // 已经代理过了 返回
  const proxy = toProxy.get(target)
  if (proxy) {
    return proxy
  }
  // 防止代理过的 多次代理
  if (toRaw.has(target)) {
    return target
  }
  const baseHandler = {
    get(target, key, receiver) { // target:代理对象  key:键  receiver:代理对象
      // console.log('获取')
      const result = Reflect.get(target, key, receiver)
      // 收集依赖  订阅  把当前的 key 和 effect 对应起来
      track(target, key) // 目标上的 key 变化了 重新让数组中的 effect 执行即可
      return isObject(result) ? reactive(result) : result
    },
    set(target, key, value, receiver) {
      // 屏蔽 识别改属性 还是 新增属性
      const hadKey = hasOwn(target, key)
      const oldValue = target[key]
      const res = Reflect.set(target, key, value, receiver)
      if (!hadKey) {
        trigger(target, 'add', key)
        console.log('新增属性')
      } else if (oldValue !== value) { // 表示属性更改过了
        trigger(target, 'set', key)
        console.log('修改属性')
      }
      // 为了屏蔽无意义的属性修改
      console.log('设置')
      return res // 如果设置没成功,对象不可以被更改
    },
    deleteProperty(target, key) {
      console.log('删除')
      return Reflect.deleteProperty(target, key)
    }
  }
  const observed = new Proxy(target, baseHandler) // es6
  toProxy.set(target, observed)
  toRaw.set(observed, target)
  return observed
}

// 栈  先进后出  { name: [effect] }
const activeEffectStack = [] // 栈 结果
/** targetsMap
[
    {
        { name: 'zf' } | target :   [{
                                        name | key :    [fn,fn] | Set
                                    }]  |   Map
    }
]
*/
const targetsMap = new WeakMap() // 集合 和 hash表
function track(target, key) { // 如果 target key变化了 执行数组里面的方法
  const effect = activeEffectStack[activeEffectStack.length - 1]
  if (effect) { // 有对应关系 创建关联
    let depsMap = targetsMap.get(target)
    if (!depsMap) {
      targetsMap.set(target, depsMap = new Map())
    }
    let deps = depsMap.get(key)
    if (!deps) {
      depsMap.set(key, deps = new Set())
    }
    if (!deps.has(effect)) {
      deps.add(effect)
    }
    // 动态创建依赖关系
  }
  // 什么都不做
}
function trigger(target, type, key) {
  // 取 effect 执行
  const depsMap = targetsMap.get(target)
  if (depsMap) {
    const deps = depsMap.get(key)
    if (deps) { // 将当前 key 对应方法effect 依次执行
      deps.forEach(effect => {
        effect()
      })
    }
  }
}

// 响应式 副作用
function effect(fn) {
  // 需要把 fn 变成响应式 函数
  const effect = creatReactiveEffect(fn)
  effect() // 默认先执行一次
}
function creatReactiveEffect(fn) {
  const effect = function() { // 这个函数就是 创建的响应式 effect
    return run(effect, fn) // 1.让fn执行   2.effect存在栈中
  }
  return effect
}
function run(effect, fn) { // 运行 fn 将 effect存起来
  try {
    activeEffectStack.push(effect) // 进栈
    console.log(effect)
    fn() // vue2 一致 利用js单线程
  } finally {
    activeEffectStack.pop() // 出栈
  }
}

// 依赖收集  发布订阅
const obj = reactive({ name: 'xxx' })
effect(() => { // effect 会执行两次，之后依赖的数据变化了 会再次执行
  console.log(obj.name) // 会调用 get 方法
})
obj.name = 'xxx'

// ref computed

// 1
// 代理对象 不需要重写属性
// let obj = { name:{ n: 'jw' } };
// let proxy = reactive(obj);
// proxy.name.n = 12
// console.log(proxy.name.n)

// 2
// let arr = [1,2,3]
// let proxy = reactive(arr);
// proxy.push(4);
