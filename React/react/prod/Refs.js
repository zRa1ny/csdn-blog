var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

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

var FancyButton = function (_React$Component) {
    _inherits(FancyButton, _React$Component);

    function FancyButton() {
        _classCallCheck(this, FancyButton);

        return _possibleConstructorReturn(this, (FancyButton.__proto__ || Object.getPrototypeOf(FancyButton)).apply(this, arguments));
    }

    _createClass(FancyButton, [{
        key: 'focus',
        value: function focus() {}
    }]);

    return FancyButton;
}(React.Component);

var MFancyButton = logProps(FancyButton);

var ref = React.createRef();
// 我们导入的 FancyButton 组件是高阶组件（HOC）LogProps。
// 尽管渲染结果将是一样的，
// 但我们的 ref 将指向 LogProps 而不是内部的 FancyButton 组件！
// 这意味着我们不能调用例如 ref.current.focus() 这样的方法
React.createElement(MFancyButton, { label: 'click me', handleClick: handleClick, ref: ref });
function logProps(Component) {
    var LogProps = function (_React$Component2) {
        _inherits(LogProps, _React$Component2);

        function LogProps() {
            _classCallCheck(this, LogProps);

            return _possibleConstructorReturn(this, (LogProps.__proto__ || Object.getPrototypeOf(LogProps)).apply(this, arguments));
        }

        _createClass(LogProps, [{
            key: 'componentDidUpdate',
            value: function componentDidUpdate(prevProps) {
                console.log('old props:', prevProps);
                console.log('new props:', this.props);
            }
        }, {
            key: 'render',
            value: function render() {
                var _props = this.props,
                    forwardedRef = _props.forwardedRef,
                    res = _objectWithoutProperties(_props, ['forwardedRef']);

                return React.createElement(Component, Object.assign({}, res, { ref: forwardedRef }));
            }
        }]);

        return LogProps;
    }(React.Component);

    return React.forwardRef(function (props, ref) {
        return React.createElement(LogProps, Object.assign({}, props, { forwardRef: ref }));
    });
}