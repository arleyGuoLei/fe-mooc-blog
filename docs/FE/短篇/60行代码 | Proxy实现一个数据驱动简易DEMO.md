--- 
title: 60行代码 | Proxy实现一个数据驱动简易DEMO
date: 2020-02-08
sidebar: 'auto'
categories: 
 - 短篇博文
tags: 
 - 面试
publish: true
---

<!-- more -->

## 运行截图

![截图](https://user-gold-cdn.xitu.io/2020/4/8/1715875af3635daa?w=800&h=214&f=gif&s=556598)

## 本文能做的

1. 带你了解一下`Proxy`的使用
2. 了解通过插值表达式怎么实现简易版的数据驱动
3. 代码仅是简单Demo，参考了[50行代码的MVVM，感受闭包的艺术](https://juejin.im/post/5b1fa77451882513ea5cc2ca)，一篇好文章，因为时间，沉底了，掏出来再学习一下~

```html
<!DOCTYPE html>
<html lang="zh-CN">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>pVue-proxy-mvvm</title>
</head>

<body>
  <div id="app">
    <p>hello, {{ name }}</p>
    <div>
      <span>author: {{ author }}</span>
      <span style="margin-left: 24px">time: {{ time }}</span>
    </div>
  </div>

  <script>
    // 当初始的 HTML 文档被完全加载和解析完成之后,DOMContentLoaded 事件被触发, 无需等待样式表、图像和子框架的完成加载。
    document.addEventListener("DOMContentLoaded", () => {
      const vm = new pVue({
        el: "#app",
        data: {
          name: "Proxy",
          time: new Date(),
          author: "arley",
        },
      })

      for (let i = 0; i < 10; i++) {
        setTimeout(() => {
          this.data.name = `pVue, update: ${i}` // this === window
        }, 200 * (i + 1))
      }
    })

    class pVue {
      constructor(options) {
        const { el, data } = options
        this.options = options
        this._nodes = {} // 存在插值表达式的节点
        window.data = this.onProxy(data) // 监听数据变化
        this.render(document.querySelector(el)) // 首次替换插值表达式为data内的初始值
      }

      onProxy(data) {
        const that = this
        const handler = {
          set(target, property, value, receiver) {
            // 监听到值变化，再一次替换插值表达式为新值
            that._nodes[property].node.innerHTML = that._nodes[property].defaultData.replace(
              new RegExp(`{{\\s*${property}\\s*}}`, "g"),
              value
            )
            return Reflect.set(target, property, value)
          },
        }
        return new Proxy(data, handler)
      }

      render(node) {
        Array.prototype.forEach.call(node.childNodes, (child) => {
          if (
            !child.firstElementChild &&
            /\{\{(.+?)\}\}/.test(child.innerHTML)
          ) {
            const key = RegExp.$1.trim()
            this._nodes[key] = { // 保存含有插值的dom节点 和 原本的插值表达式内容
              node: child,
              defaultData: child.innerHTML
            }
            // 替换插值表达式为data的真正内容
            child.innerHTML = child.innerHTML.replace(
              new RegExp(`{{\\s*${key}\\s*}}`, "g"),
              this.options.data[key]
            )
          } else if (child.firstElementChild) { // 当前节点下还有其他节点
            this.render(child)
          }
        })
      }
    }
  </script>
</body>

</html>
```

## 结尾讨论

Vue中的MVVM和Vue的对应关系到底是什么样子的呐？因为看到了很多不同的版本，有疑惑。

- M: xxx
- V: xxx
- VM: xxx
