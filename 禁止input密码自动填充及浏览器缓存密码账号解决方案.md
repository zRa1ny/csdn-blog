禁止自动填充方案
```
  readonly  onfocus="this.removeAttribute('readonly')" 

```
这方案亲测有效，简单直接，把上面代码直接复制放到`input`标签就上就行。
`ps:现有的网上多数加隐藏input获取值，都是解决默认填充的，而剩下的方案都是只能实现部分功能。`

但是这个方案 如果使用`password`还是会引起浏览器提醒是否保存密码，并不能禁用缓存，只能不自动把账号密码填充进去。

为了，当`type="password"`的时候，做了以下测试：
1. 动态设置，初始化为了`text`,输入之后变为`password`。失败：在谷歌上，只要设置过`password`这个input就能引起浏览器反应（出现钥匙的标签，继而提交的时候弹出提示）。
2. 因为是input为空的时候，钥匙会消失。输入值就会出现，并且js操作的值和初始化值的不会出现钥匙，所以能不能把这个动作禁止了，浏览器接受不到就不出现。按照DOM事件的思路，禁用了`input`的所有事件的冒泡，默认事件，无效。失败：完全不知道浏览器是怎么触发得。
3. 继而放弃禁止出现钥匙，那么表单提交动作浏览器能不能禁止，一堆操作禁止，失败：同2一样浏览器并不是在事件机制接受到的触发，或者是在我们事件机制之前？不得而知
4. 至此，原生的`passwraod`已经没有思路来解决这个问题（如果有请留言，作者尝试后更新文章），那么我们就来打造了一个`password`。

首先，什么都不说，直接上代码。
引入js后，你只需要:
```
   <input type="text" id="password"  value="123456a" autocomplete="off">
```
```
    var password = new Text2Password({
        id: "password",
        // type:"password", // password 转化为* 其他直接显示
        // pattern: /([\u4e00-\u9fa5])/g ,// 接受一个正则，过滤匹配内容
        // symbol:"*",// 接受一个字符 作为隐藏的是占位符
        callback: function () {
            // 数据改变后的回调
            console.log(this.value)
        }
    });
    // password.value 取值
    // password.$changeType(type)  切换显示状态 传入'password'隐藏 其余正常显示
    // password.$setValue(value)   设置值（初始值会自动初始化）
  
    
```
已实现功能：
1. 隐藏真实值。
2. 解决浏览器记住密码，自动填充，自动弹出记住密码的提示。
3. 禁止复制粘贴剪切，允许粘贴。
4. 可以在任意位置进行数据。
5. 兼容中文输出（默认正则会过滤中文，但是输入法输入的字母可以正常被输入。）
6. 兼容谷歌，ie，火狐

ps:ie可以配合`style="ime-mode:disabled"`禁用中文输入法，为了保持浏览器展现形式一致，没有默认添加。


如果有更好的方法，或者上述代码有bug，请留言一起交流，作者会长期更新。

附录：vue 组件版本。
使用方法：
```
  Vue.use(PassWordPlugin)
```

```
  <pass-word :value="value"  :type="type"></pass-word>
```
切换数据，按照`Vue`模式操作传入的`value`和`type`即可，监听了后续数据变化。
与纯js版本一样，也接受`symbol`和`pattern`.
