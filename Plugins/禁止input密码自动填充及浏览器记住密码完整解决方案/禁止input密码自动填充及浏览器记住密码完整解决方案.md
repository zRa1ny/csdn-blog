#### 禁止自动填充方案
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

#### 禁止记住密码方案

首先，什么都不说，直接上代码（下载下载补了直接去文章末尾复制）。
[引入js后](https://github.com/18271683093/csdn-blog/blob/master/js/Text2Password.js)，你只需要:
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
3. 禁止复制，剪切，拖拽，允许粘贴。
4. 可以在任意位置进行数据插入，删除，替换。
5. 兼容中文输出（默认正则会过滤中文，但是输入法输入的字母可以正常被输入。）
6. 兼容谷歌，ie，火狐

ps:ie可以配合`style="ime-mode:disabled"`禁用中文输入法，为了保持浏览器展现形式一致，没有默认添加。


如果有更好的方法，或者上述代码有bug，请留言一起交流，作者会长期更新。

附录：[vue 组件版本](https://github.com/18271683093/csdn-blog/blob/master/js/passWord.js)。
使用方法：
```
  Vue.use(PassWordPlugin)
```

```
  <pass-word :value="value"  :type="type"></pass-word>
```
切换数据，按照`Vue`模式操作传入的`value`和`type`即可，监听了后续数据变化。
与纯js版本一样，也接受`symbol`和`pattern`.

能正常下载代码的童鞋不用往下看了 ==
----

>  js版本 Text2Password.js

```
; (function (name, definition) {
    if (typeof define === 'function') {
        define(definition);
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = definition();
    } else {
        this[name] = definition();
    }
})('Text2Password', function () {
    "use strict";
    function Text2Password (opts) {
        var id = opts.id,
            _opts$type = opts.type,
            type = _opts$type === void 0 ? 'password' : _opts$type,
            _opts$symbol = opts.symbol,
            symbol = _opts$symbol === void 0 ? '*' : _opts$symbol,
            _opts$callback = opts.callback,
            callback = _opts$callback === void 0 ? function () { } : _opts$callback,
            _opts$pattern = opts.pattern,
            pattern = _opts$pattern === void 0 ? /([\u4e00-\u9fa5])/g : _opts$pattern,
            _this = this;

        _this.input = document.getElementById(id);

        if (!_this.input || _this.input.tagName.toLowerCase() != 'input' || _this.input.type === 'password') {
            throw new Error("请传一个type不为password的input的id属性！");
            return;
        }

        _this.input.valueProxy = "";
        _this.callback = callback;
        _this.type = type;
        _this.symbol = symbol;
        _this.pattern = pattern;
        _this.cursor = 0;
        _this.isInit = false;
        Object.defineProperty(_this, 'value', {
            get: function get () {
                return _this.input.valueProxy;
            }
        });

        _this.init();

        return _this;
    }

    Text2Password.prototype.init = function () {
        this.$setValue(); // 设置初始值

        this._preventDefaultEvent(); //阻止input type=text 的默认操作 使其比较相似与password


        this._bindEvent(); // 绑定事件 转化数据 =》 符号


        this.isInit = true;
    }; // 阻止复制 剪切  拖拽进入 拖拽离开


    Text2Password.prototype._preventDefaultEvent = function (e) {
        function _preventDefaultHandler (e) {
            var e = e || window.event;
            e.preventDefault();
        }

        function _mousedownHandler (e) {
            if (e.button === 0 && this.selectionStart != this.selectionEnd) {
                this.selectionStart = this.selectionEnd = this.value.length;
            }

            return false;
        }

        function _dragleaveHandler (e) {
            e.preventDefault();
            this.warn("_dragleaveHandler");
            this.removeAttribute('readonly');
            return false;
        }

        function _dragenterhandlder (e) {
            e.preventDefault();
            this.warn("_dragenterhandlder");
            this.setAttribute('readonly', true);
            return false;
        }

        this.input.addEventListener("copy", _preventDefaultHandler);
        this.input.addEventListener("cut", _preventDefaultHandler);
        this.input.addEventListener("dragenter", _dragenterhandlder);
        this.input.addEventListener("dragleave", _dragleaveHandler);
        this.input.addEventListener("mousedown", _mousedownHandler);
    };

    Text2Password.prototype._bindEvent = function () {
        var _this2 = this;

        this.input.addEventListener("compositionstart", function () {
            _this2.lock = true;

            _this2.warn("start");
        });
        this.input.addEventListener("compositionend", function () {
            _this2.lock = false;

            _this2.warn("end");

            _this2._inputHandler();
        });
        this.input.addEventListener("input", this._inputHandler.bind(this));
        this.input.addEventListener("propertychange", this._inputHandler.bind(this));
    };

    Text2Password.prototype._inputHandler = function () {
        if (this.lock) return;

        if (!this.isInit) {
            this.warn('init');
        } else {
            this.warn('input');
        }

        if (this.type === 'password') {
            this._passwordHandler();
        } else {
            this._textHandler();
        }

        this._showValue();

        this._setCursor();

        typeof this.callback == "function" && this.callback();
    };

    Text2Password.prototype._passwordHandler = function () {
        var _this = this,
            cvalueArr = this._filterCn(this.input.value).split(""),
            ovalueArr = this.input.valueProxy.split(""),
            clen = cvalueArr.length - ovalueArr.length,
            cursor = this.input.selectionStart,
            ccursor = cursor - this.input.value.split("").length + cvalueArr.length,
            sidx = "",
            eidx = "";

        if (clen > 0) {
            var inArr = cvalueArr.join("").replace(/\*/g, "").split("");
            var right = cvalueArr.length - cursor > 0 ? ovalueArr.slice(-(cvalueArr.length - cursor)) : [];
            ovalueArr = [].concat(ovalueArr.slice(0, cursor - inArr.length), inArr, right);
        }

        if (clen < 0) {
            ovalueArr.splice(cursor, Math.abs(clen));
        }

        cvalueArr.forEach(function (value, index) {
            if (value != "*") {
                ovalueArr[index] = value;
            }
        });
        this.input.valueProxy = ovalueArr.join("");
        this.cursor = ccursor;
    };

    Text2Password.prototype._filterCn = function _filterCn (str, repStr) {
        if (!str) return str;
        var pattern = this.pattern,
            repStr = repStr ? repStr : "";
        return str.replace(pattern, repStr);
    };

    Text2Password.prototype._textHandler = function () {
        this.input.valueProxy = this._filterCn(this.input.value);
        this.cursor = this.input.selectionStart - this.input.value.split("").length + this.input.valueProxy.split("").length;
    };

    Text2Password.prototype._showValue = function () {
        var _this3 = this;

        var str = "";

        if (this.type === 'password') {
            this.value.split("").forEach(function (val) {
                str += _this3.symbol;
            });
        } else {
            str = this.value;
        }

        this.input.value = str;
    };

    Text2Password.prototype._setCursor = function () {
        this.input.selectionStart = this.cursor;
        this.input.selectionEnd = this.cursor;
    };

    Text2Password.prototype.warn = function (msg) {
        console.log(msg);
    };

    Text2Password.prototype.$setValue = function (value) {
        if (value) this.input.value = value;

        this._inputHandler();
    };

    Text2Password.prototype.$changeType = function (type) {
        this.type = type;
        this.$setValue(this.value);
    };

    return Text2Password;
});
```

> vue组件版本 passWord.js

```
; (function (name, definition) {
    if (typeof define === 'function') {
        define(definition);
    } else if (typeof module !== 'undefined' && module.exports) {
        module.exports = definition();
    } else {
        this[name] = definition();
    }
})('PassWordPlugin', function () {
   'use strict';
    return {
        install: function (value) {
            Vue.component("pass-word", {
                template: '<input                            \
                                style="ime-mode:disabled"        \
                                autocomplete="off"               \
                                ref="pw-input"                   \
                                :value="showValue"               \
                                type="text"                      \
                                @input="cinput"                  \
                                @copy.prevent=""                 \
                                @cut.prevent=""                  \
                                @compositionstart.prevent="_compositionstartHandler"              \
                                @compositionend.prevent="_compositionendHandler"                  \
                                @dragenter="_dragenterhandlder"  \
                                @dragleave="_dragleaveHandler"   \
                                @mousedown="_mousedownHandler"   \
                                />',
                props: {
                    type: {
                        type: String,
                        default: 'password'
                    },
                    value: {
                        type: String,
                        default: ""
                    },
                    symbol: {
                        type: String,
                        default: "*"
                    },
                    pattern: {
                        type: RegExp,
                        default: function () {
                            return /([\u4e00-\u9fa5])/g
                        }
                    }
                },
                data: function data () {
                    return {
                        valueProxy: ""
                    };
                },
                computed: {
                    showValue: function showValue () {
                        if (this.type != "password") {
                            return this.valueProxy;
                        }
                        return this.fillSymbol();
                    }
                },
                watch: {
                    value: function value (newval) {
                        if (newval != this.valueProxy) this._initValue();
                    }
                },
                mounted: function mounted () {
                    this._initValue();
                },
                methods: {
                    _compositionstartHandler: function () {
                        this.lock = true;
                        console.log("start")
                    },
                    _compositionendHandler: function (e) {
                        this.lock = false;
                        console.log("end")
                        if (e.target.composing === undefined) this.cinput();// 兼容Vue版本 有composing属性的版本会自动触发一次cinput  
                    },
                    _mousedownHandler: function (e) {
                        if (e.button === 0 && (this.$refs['pw-input'].selectionStart != this.$refs['pw-input'].selectionEnd)) {
                            this.$refs['pw-input'].selectionStart = this.$refs['pw-input'].selectionEnd = this.valueProxy.length;
                        }
                        return false
                    },
                    _dragleaveHandler: function (e) {
                        e.preventDefault();
                        // console.log("_dragleaveHandler")
                        this.$refs['pw-input'].removeAttribute('readonly')
                        return false
                    },
                    _dragenterhandlder: function (e) {
                        e.preventDefault();
                        // console.log("_dragenterhandlder")
                        this.$refs['pw-input'].setAttribute('readonly', true)
                        return false
                    },
                    _filterCn: function _filterCn (str, repStr) {
                        if (!str) return str;
                        var pattern = this.pattern,
                            repStr = repStr ? repStr : "";
                        return str.replace(pattern, repStr);
                    },
                    _initValue: function _initValue () {
                        var value = this.value
                        if (value == undefined || value == null) value = "";
                        this.valueProxy = this._filterCn(value);
                        this.$emit('input', this.valueProxy);
                    },
                    _inputHandler: function _inputHandler () {

                        var _this = this;

                        var cvalueArr = this._filterCn(this.$refs['pw-input'].value).split(""),
                            ovalueArr = this.valueProxy.split(""),
                            clen = cvalueArr.length - ovalueArr.length,
                            cursor = this.$refs['pw-input'].selectionStart,
                            ccursor = cursor - this.$refs['pw-input'].value.split("").length + cvalueArr.length,
                            sidx = "",
                            eidx = "";


                        if (clen > 0) {
                            var inArr = cvalueArr.join("").replace(/\*/g, "").split("");
                            var right = cvalueArr.length - cursor > 0 ? ovalueArr.slice(-(cvalueArr.length - cursor)) : [];
                            ovalueArr = [].concat(ovalueArr.slice(0, cursor - inArr.length), inArr, right);
                        }

                        if (clen < 0) {
                            ovalueArr.splice(cursor, Math.abs(clen));
                        }

                        cvalueArr.forEach(function (value, index) {
                            if (value != "*") {
                                ovalueArr[index] = value;
                            }
                        });

                        if (this.valueProxy == ovalueArr.join("")) {
                            this.$forceUpdate();
                        } else {
                            this.valueProxy = ovalueArr.join("");
                        }

                        this.$nextTick(function () {
                            _this.$refs['pw-input'].selectionStart = ccursor;
                            _this.$refs['pw-input'].selectionEnd = ccursor;
                        });
                    },
                    cinput: function cinput (e) {
                        if (this.lock) return;
                        console.log('input')
                        if (this.type != 'password') {
                            this.valueProxy = this._filterCn(this.$refs['pw-input'].value);
                            this.$forceUpdate();
                        } else {
                            this._inputHandler();
                        }
                        this.$emit('input', this.valueProxy);
                    },
                    fillSymbol: function fillSymbol () {
                        var symbolstr = "";
                        for (var i = 0, len = this.valueProxy.length; i < len; i++) {
                            symbolstr += this.symbol;
                        }
                        return symbolstr;
                    }
                }
            });
        }
    }
})

```
