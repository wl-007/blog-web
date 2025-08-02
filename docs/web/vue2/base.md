

# Vue2 基础

主要记录 Options API 语法

最好的文档：[官方文档](https://v2.cn.vuejs.org/v2/guide/)

## 创建项目

[Vue CLI](https://cli.vuejs.org/zh/guide/)


## 基础结构

```vue
<template>
  <div id="app">
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello Vue2!'
    }
  }
}
</script>
```

## 状态定义

- data

  组件的响应式状态通过 data 选项返回对象定义。

```js
export default {
  data() {
    return {
      count: 0,
      user: { name: 'Tom' }
    }
  }
}
```

- computed

  计算属性会基于它们的依赖进行缓存，只有相关依赖发生变化时才会重新计算。

```js
computed: {
  reversedMessage() {
    return this.message.split('').reverse().join('')
  }
}
```

## 事件绑定

使用 v-on 指令 (简写为 @) 监听 DOM 事件。

```vue
<button @click="handleClick">点击</button>

<script>
export default {
  methods: {
    handleClick() {
      alert('按钮被点击')
    }
  }
}
</script>
```

## 属性绑定

通过 v-bind 或简写 ":" 绑定属性。

```vue
<img :src="imgUrl" :alt="desc" />
```

## 常用指令

- v-if / v-else-if / v-else
- v-for
- v-show
- v-model
- v-bind
- v-on

```vue
<p v-if="isShow">显示内容</p>
<ul>
  <li v-for="item in list" :key="item.id">{{ item.name }}</li>
</ul>
<input v-model="inputValue" />
```

## 侦听器

通过 watch 选项监听数据变化。

```js
watch: {
  count(newVal, oldVal) {
    console.log('count changed:', newVal)
  },
  'user.name'(val) {
    console.log('user name changed:', val)
  }
}
```

## 生命周期

[生命周期](https://cn.vuejs.org/v2/guide/instance.html#生命周期图示)

- beforeCreate
- created
- beforeMount
- mounted
- beforeUpdate
- updated
- beforeDestroy
- destroyed

```js
export default {
  mounted() {
    console.log('组件已挂载')
  }
}
```

## 属性声明与事件定义

通过 props 选项声明外部传入的属性。

```js
props: {
  title: {
    type: String,
    required: true
  }
}
```

## 插槽

父组件向子组件插入内容。

```vue
<!-- 父组件 -->
<my-component>
  <span>插槽内容</span>
</my-component>

<!-- 子组件 -->
<template>
  <div>
    <slot></slot>
  </div>
</template>
```

## 内置组件

- transition
- transition-group

[内置组件](https://cn.vuejs.org/v2/guide/transitions.html)

```vue
<transition name="fade">
  <p v-if="show">淡入淡出</p>
</transition>

<transition-group name="list" tag="ul">
  <li v-for="item in items" :key="item.id">{{ item.text }}</li>
</transition-group>
``` 