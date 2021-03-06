##### 组件化应用构建

Vue中，组件是一个重要的组成对象，任意一个应用界面都可以抽象成一个有多个组件组成的组件数。

例如：一个页面。
```
    <header></header>
    <main></main>
    <footer></footer>
```
一个`header`:
```
  <logo></logo>
  <menu></menu>
```
这样我们将整个页面抽象成一个个组件，每个组件可以进行独立的编写和复用，维持自身的独立性。

在vue中，一个组件的本质是一个拥有预定义选项的Vue实例。
```
Vue.component('todo-item', {
  template: '<li>这是个待办项</li>'
})
```
我们的组件应该适用于不同的场景，所以数据需要能动态传入。
Vue中的，子组件可以可以定义一个`props`参数，在参数中规定可以传入的数据，而父组件可以用过绑定这个`属性`将自己的数据传给子组件使用。
```
Vue.component('todo-item', {
  // todo-item 组件现在接受一个
  // "prop"，类似于一个自定义 attribute。
  // 这个 prop 名为 todo。
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})
```
子组件的`props`属性使用起来，跟`data`是一样的。但是需要注意的是，子组件不允许修改`props`里面的数据，因为这个数据是父组件传入的，而Vue的数据流向是单向的。(实际上，如果父组件传入的是一个对象，子组件是可以修改的，但是实际使用中不建议这样使用的，因为这个会让我们的数据变化变得不可测，如果需要改变，建议缓存到子组件自己的`data`属性中进行维护)

##### 与自定义元素的关系

1. Web Components 规范已经完成并通过，但未被所有浏览器原生实现。目前 Safari 10.1+、Chrome 54+ 和 Firefox 63+ 原生支持 Web Components。相比之下，Vue 组件不需要任何 polyfill，并且在所有支持的浏览器 (IE9 及更高版本) 之下表现一致。必要时，Vue 组件也可以包装于原生自定义元素之内。

2. Vue 组件提供了纯自定义元素所不具备的一些重要功能，最突出的是跨组件数据流、自定义事件通信以及构建工具集成。

简单来说， Web Components 是由浏览器支持的一种组件定义方法，渲染出来的是组件标签，而有些浏览器没有实现；vue的组件标签是由vue实现的，会根据标签匹配对应的组件内容，最终会全部转化为html标签（具体过程可以在打包也可以在页面运行中）。