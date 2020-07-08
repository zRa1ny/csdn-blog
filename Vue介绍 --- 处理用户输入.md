### 处理用户输入

与用户交互进行是通过监听事件，在传统js中，我们获取`DOM`，通过`addEventListener()`,来监听用户的点击，文字输出，鼠标移动等等动作，从而触发不同的程序来响应用户的操作。
```
var input  = document.getElementById("input");
input.oncick = function(){
    console.log("点击了这个input")
}
```

Vue中同样是通过这方式，但是在Vue中，并不推荐我们直接通过获取`DOM`绑定事件，而是通过`v-on:eventName`简写`@eventName`方式绑定函数进行处理用户的操作。

```
<div id="app-5">
  <p>{{ message }}</p>
  <button v-on:click="reverseMessage">反转消息</button>
</div>

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!'
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
```
而Vue在渲染页面生成DOM的时候，就会对这个DOM绑定对应的绑定的事件。

在上面官方例子中，`v-on:click="reverseMessage"`,其中`click`是监听的是动作名称，`reverseMessage`是对应的回调处理函数。

但是，Vue扩展了事件监听，这里不仅可以监听`click`,`change`,`mouseover`这些原生的事件，还更简单的自定义事件，例如`@dlyclick`，通过`this.$emit("dlyclick")`来触发这些事件。

在处理这些交互的时候，需要注意的是，我们不操作直接操作DOM ，在Vue中，我们只关注状态改变的，通过逻辑改变状态，所有的 DOM 操作都由 Vue 来处理。

