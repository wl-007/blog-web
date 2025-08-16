---
next:
  text: "Vue3进阶"
  link: "/web/vue3/advanced"
recommend: 1
---

# Vue3 基础

主要记录 Composition 语法

最好的文档：[官方文档](https://cn.vuejs.org/guide/introduction.html)

## 创建项目

[Vite](https://vitejs.cn/vite5-cn/guide/)

## 基础结构

  <demo vue="components/vue3base/HelloWorld.vue"  />

## 状态定义

- ref

可以用来定义任意类型的数据，但是在 script 范围内使用时，必须通过 .value；

- reactive

  用来定义引用类型的数据，定义好的数据，在后续修改时不能修改引用地址

  <demo vue="components/vue3base/BaseStatus.vue"  />

- computed

  Vue 的计算属性会自动追踪响应式依赖，依赖没有变化便不会更新（缓存效果）

  <demo vue="components/vue3base/ComputedDemo.vue"  />

## 事件绑定

我们可以使用 v-on 指令 (简写为 @) 来监听 DOM 事件，并在事件触发时执行对应的 JavaScript。用法：v-on:click="handler" 或 @click="handler"。

  <demo vue="components/vue3base/EventDemo.vue"  />

## 属性绑定

通过 v-bind 或简写 ":"

  <demo vue="components/vue3base/attrDemo.vue"  />

## 常用指令

  <demo vue="components/vue3base/InstructDemo.vue"  />

## 侦听器

  监听对象属性的变化，当属性值发生改变时，会执行对应的回调函数。    
  <demo vue="components/vue3base/WatchDemo.vue"  />

## 生命周期

  [生命周期](https://cn.vuejs.org/guide/essentials/lifecycle.html)

## 属性声明与事件定义

  一个组件需要显式声明它所接受的 props，这样 Vue 才能知道外部传入的哪些是 props，哪些是透传 attribute
  <demo vue="components/vue3base/PropsDemo.vue"  />

## 插槽

  <demo vue="components/vue3base/SlotDemo.vue"  />

## 内置组件

  [内置组件](https://cn.vuejs.org/guide/built-ins/transition.html)


  Vue 提供了两个内置组件，可以帮助你制作基于状态变化的过渡和动画：
  - Transition 会在一个元素或组件进入和离开 DOM 时应用动画。
  - TransitionGroup 会在一个 v-for 列表中的元素或组件被插入，移动，或移除时应用动画。
  <demo vue="components/vue3base/TransitionDemo.vue"  />
  <demo vue="components/vue3base/TransitionGroupDemo.vue"  />
