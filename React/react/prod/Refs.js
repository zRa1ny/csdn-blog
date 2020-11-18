var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// function FancyButton(props){
//     return (
//         <button className="FancyButton">
//             {props.children}
//         </button>
//     )
// }

// const FancyButton = React.forwardRef((props, ref) => (
//     <button ref={ref} className="FancyButton">
//         {props.children}
//     </button>
// ))
// // 你可以直接获取DOM button 的ref
// const ref = React.createRef();
// <FancyButton ref="ref">click me!</FancyButton>
// function logProps(WrappedComponent){
//     class LogProps extends React.Component{
//         componentDidUpdate(prevProps){
//             console.log('old props:',prevProps)
//             console.log('new props:',this.props)
//         }
//         render(){
//             return <WrappedComponent {...this.props} />
//         }
//     }

//     return LogProps
// }

// class FancyButton extends React.Component{
//     focus(){}
// }

// const MFancyButton = logProps(FancyButton);

// const ref = React.createRef();
// 我们导入的 FancyButton 组件是高阶组件（HOC）LogProps。
// 尽管渲染结果将是一样的，
// 但我们的 ref 将指向 LogProps 而不是内部的 FancyButton 组件！
// 这意味着我们不能调用例如 ref.current.focus() 这样的方法
/* <MFancyButton label="click me" handleClick={handleClick} ref={ref} />
*/
// class LogProps extends React.Component{
//     componentDidUpdate(prevProps){
//         console.log('old props:',prevProps)
//         console.log('new props:',this.props)
//     }
//     render(){
//         const {forwardedRef,...res} = this.props;
//         return <Component {...res}  ref={forwardedRef} />
//     }
// }
// const WrappedComponent = React.forwardRef((props,ref)=>{
//     return <LogProps  forwardRef={ref} {...props}/>
// })
// const WrappedComponent = React.forwardRef(
//     function myFunction(props,ref){
//         return <LogProps {...props}  forwardRef={ref} />
//     }
// )

// function logProps(Component){
//     class LogProps extends React.Component{

//     }
//     function forwardRef(props,ref){
//         return <LogProps {...props} forwardRef={ref} />
//     }
//     // 在DevTools中为该组件提供一个更有用的显示名
//     // 例如 "ForwardRef(logProps(MyComponent))"
//     const name = Component.displayName || Component.name ;

//     forwardRef.displayName = `logProps(${name})`;
//     return React.forwardRef(forwardRef)
// }

var FormControl = function (_React$Component) {
    _inherits(FormControl, _React$Component);

    function FormControl(props) {
        _classCallCheck(this, FormControl);

        var _this = _possibleConstructorReturn(this, (FormControl.__proto__ || Object.getPrototypeOf(FormControl)).call(this, props));

        _this.updateFormData = function (feild, value) {

            _this.setState({
                main: Object.assign({}, _this.state.main, _defineProperty({}, feild, value))
            });
            setTimeout(function () {
                console.log(_this.refsArray);
            }, 1000);
            // console.log(this)
        };

        _this.addRef = function (ref) {
            _this.refsArray.push(ref);
        };

        _this.showref = function () {
            console.log(_this.refsArray);
        };

        _this.refsArray = [];

        _this.state = {
            feilds: [{
                type: "input",
                feild: "name"
            }, {
                type: "input",
                feild: "age"
            }],
            main: {
                age: 1,
                name: "张三"
            }
        };
        return _this;
    }

    _createClass(FormControl, [{
        key: "render",
        value: function render() {
            var _this2 = this;

            var feilds = this.state.feilds;
            var main = this.state.main;

            var ref = React.createRef();
            this.refsArray = [ref];
            return React.createElement(
                "div",
                null,
                React.createElement(TextInput, { ref: ref }),
                React.createElement(
                    "button",
                    { onClick: this.showref },
                    "ref"
                ),
                React.createElement(
                    "p",
                    null,
                    JSON.stringify(this.state.main)
                ),
                feilds.map(function (value, index) {
                    if (value.type == 'input') {
                        return React.createElement(TextInput, { updata: _this2.updateFormData, feild: value.feild, value: main[value.feild], key: value.feild, addRef: _this2.addRef });
                    }
                })
            );
        }
    }]);

    return FormControl;
}(React.Component);

var TextInput = function (_React$Component2) {
    _inherits(TextInput, _React$Component2);

    function TextInput(props) {
        _classCallCheck(this, TextInput);

        var _this3 = _possibleConstructorReturn(this, (TextInput.__proto__ || Object.getPrototypeOf(TextInput)).call(this, props));

        _this3.inputRef = React.createRef();

        _this3.onChange = function (e) {
            _this3.props.updata(_this3.props.feild, e.target.value);
        };

        _this3.focus = function (e) {
            _this3.inputRef.current.focus();
        };

        console.log(arguments);
        return _this3;
    }

    _createClass(TextInput, [{
        key: "render",
        value: function render() {
            if (this.props.addRef) this.props.addRef(this.inputRef);
            console.log('render');
            return React.createElement(
                "div",
                null,
                React.createElement("input", { type: "text", ref: this.inputRef, value: this.props.value ? this.props.value : '', onChange: this.onChange ? this.onChange : this.focus }),
                React.createElement(
                    "button",
                    { onClick: this.focus },
                    "focus"
                )
            );
        }
    }]);

    return TextInput;
}(React.Component);

var RefTextInput = logProps(TextInput);
var RefTextInput1 = React.forwardRef(function (props, ref) {
    return React.createElement(TextInput, Object.assign({}, props, { ref: ref }));
});

function logProps(Component) {
    var LogProps = function (_React$Component3) {
        _inherits(LogProps, _React$Component3);

        function LogProps() {
            _classCallCheck(this, LogProps);

            return _possibleConstructorReturn(this, (LogProps.__proto__ || Object.getPrototypeOf(LogProps)).apply(this, arguments));
        }

        _createClass(LogProps, [{
            key: "componentDidUpdate",
            value: function componentDidUpdate(prevProps) {
                console.log('old props:', prevProps);
                console.log('new props:', this.props);
            }
        }, {
            key: "render",
            value: function render() {
                var _props = this.props,
                    forwardedRef = _props.forwardedRef,
                    rest = _objectWithoutProperties(_props, ["forwardedRef"]);

                // 将自定义的 prop 属性 “forwardedRef” 定义为 ref


                return React.createElement(Component, Object.assign({ ref: forwardedRef }, rest));
            }
        }]);

        return LogProps;
    }(React.Component);

    // 注意 React.forwardRef 回调的第二个参数 “ref”。
    // 我们可以将其作为常规 prop 属性传递给 LogProps，例如 “forwardedRef”
    // 然后它就可以被挂载到被 LogProps 包裹的子组件上。


    return React.forwardRef(function (props, ref) {
        return React.createElement(LogProps, Object.assign({}, props, { forwardedRef: ref }));
    });
}

ReactDOM.render(React.createElement(FormControl, null), document.querySelector('#root'));