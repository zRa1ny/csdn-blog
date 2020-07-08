#####  条件
`v-if=`   通过这个指令的值，向我们在js中所做的if判断一样，来判断是否渲染加了这个指令的模板**及当前模板内部的内容**。

```
<template>
		<div v-if="false"   id=“wrapper”>
			<div  id=“inner”></div>
		</div>
</template>

```

这种情况下，不仅wrapper没有渲染，内部的inner也不会进行渲染，即页面上不存在这个dom。我们也无法通过任何方法获取他们。
与之类似的`v-show`指定，则是显示和隐藏添加这两个指令的dom和内部元素。vue会直接把模板编译后并加入页面渲染dom但是会根据后面的值，判断是隐藏它们还是显示。
并且 如果它们绑定得是当前vue得data得数据，会与执行绑定，并且动态判断当前状态并进行相应。
这个过程类似如
```
<div  id="app">
	<div  v-if="flag"   id="if"></div>
	<div  v-show="flag"  id=“show”></div>
</div>

var vm = new  Vue({
    el: '#app',
    data: {
          flag: false
    }
})

```
初始化flag，为false的时候，#if 直接不会进行渲染，#show会进行渲染，然后设置样式隐藏（`display：none·`）。
当vm.flag = true 的时候：#if会被添加页面（`appendchild`），#show会显示出来（`display:block`）。
当vm.flag = false 再次改变的时候，#if会被移除出页面（`removechild`），#show会显示出来（`display:none`）。
这个过程会一直绑定着flag的值进行变化，直至vm实例销毁。
从上面可以看出来，`v-if` 和 `v-show` ，一个有更大的操作消耗，一个有更多的初次渲染消耗，可以根据我们不同的场景进行选择。
`ps：这里提供一个思路，有的业务上，一块需要保存操作的痕迹，我们需要每次显示出来保存上次的模样，比如多级操作。  而另一种 我们需要每次显示的时候都重新开始。 这种情况v-if和v-show也能派上大作用。`

#####  循环

`v-for`指令遍历循环的对象可以是`Array | Object | number | string | Iterable (2.6 新增)`。
绑定方式：
```
<div v-for="(item,key) in items" :key="key">
  {{ item.text }}
</div>
```

实现效果类似如js中这样：
```
var html = "", items = "1234";//
for ([key, item] of Object.entries(items)) {
    html += `
    <div :key="key">
    {{ item.text }}
    </div>
    `
}
```

> key 的特殊 attribute 主要用在 Vue 的虚拟 DOM 算法，在新旧 nodes 对比时辨识 VNodes。如果不使用 key，Vue 会使用一种最大限度减少动态元素并且尽可能的尝试就地修改/复用相同类型元素的算法。而使用 key 时，它会基于 key 的变化重新排列元素顺序，并且会移除 key 不存在的元素。

所以`key`，存在可以保证的我们的循环数据是最新的，并且顺序是按照数据的顺序。显然会降低性能，但是在这种场合我们需要的数据的准确更新。`key`不能重复，重复的 key 会造成渲染错误。

循环可以用于任意`html`或者组件，甚至是`template`标签上。

ps:如果在循环中绑定`ref`,`this.$refs[refname]`会变成一个数组。