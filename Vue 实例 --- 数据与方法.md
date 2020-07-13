##### 数据

> 当一个 Vue 实例被创建时，它将 data 对象中的所有的 property 加入到 Vue 的响应式系统中。当这些 property 的值发生改变时，视图将会产生“响应”，即匹配更新为新的值。
```
var data = { a:1 }

var vm = new Vue({
  data:data
})

```
1. 当`data`被初始进入Vue得响应式系统之后，`data`中得所有值可以通过`vm`直接访问，而不是`vm.data`的方式。
2. 实例上，初始化的时候，是data指向的对象初始化到响应式系统中了，所以我们也可以通过`data`直接改这些值，并且三种方式改变的值，都是改变`data`这个对象的值，访问值也是访问的这个对象。
3. 加入响应式系统之后，意味着如果我们在视图`template`中绑定了一个`data`中值，那么这个值和视图中显示的值`绑定了`，我们通过2中任意一方式改变这个值，不仅2中的三种取值一致改变，而且视图中这个位置显示的数据也会跟着一起变化。这就是Vue数据双向绑定的效果。

```
var data = { a:1 }

var vm = new Vue({
  data:data,
  componets:{
    child:{
      data:function(){
        return {}
      },
      props:{
        obj:{
          type:Object,
          default:function(){
            return {}
          }
        }
      }
    }
  }
})

```

如果是在组件中，每一个组件其实也是一个Vue实例，组件中的数据除了`data`还有`props`。并且`data`和初始Vue的中也有区别，组件的中的`data`是一个函数，对应`data`的值，是这个函数的返回值。
`props`:组件中由父组件的传入的数据，需要注意的是，需要设定数据类型（低版本不需要），默认值也是一个函数，初始值为这个函数的返回值。
`data`和`props`是都可以响应`watch`和`computed`。

除了这些由用户定义的数据之外，Vue还有一些以`$`开头的数据属性，例如`$el`储存的是对应template的Dom.


##### 方法

```
var vm = new Vue({
     methods:{
       fn：function(){}
     }
})
```
Vue初始化的时候的还接收一个`methods`属性，该属性的每一个属性，都必须是一个函数，函数内部的`this`指向当前这个Vue实例。并且我们可以像使用`data`的数据那样通过`vm`凭借`methods`中的方法名称，直接使用这个函数，而不需要`vm.methods`这样去使用，当然这样也是可以的。

组件的方法和实例的方法保持一致。

除了这些由用户定义的数据之外，Vue还有一些以`$`开头的方法，例如`$watch`,`$set` ...
