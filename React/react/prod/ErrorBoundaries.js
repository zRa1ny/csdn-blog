var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ErrorBoundary = function (_React$Component) {
    _inherits(ErrorBoundary, _React$Component);

    function ErrorBoundary(props) {
        _classCallCheck(this, ErrorBoundary);

        var _this = _possibleConstructorReturn(this, (ErrorBoundary.__proto__ || Object.getPrototypeOf(ErrorBoundary)).call(this, props));

        _this.state = {
            hasError: false
        };
        return _this;
    }

    _createClass(ErrorBoundary, [{
        key: 'componentDidCatch',
        value: function componentDidCatch(err, errInfo) {
            console.log(err, errInfo);
            // logErrorToMyService(err,errInfo);// 上传服务器
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.state.hasError) {
                // 你可以自定义降级之后的ui并渲染
                return React.createElement(
                    'h1',
                    null,
                    'something went wrong.'
                );
            }

            return this.props.children;
        }
    }], [{
        key: 'getDerivedStateFromError',
        value: function getDerivedStateFromError(error) {
            // 更新state 湿的下一次渲染能够显示降级之后的UI
            return { hasError: true };
        }
    }]);

    return ErrorBoundary;
}(React.Component);

function App() {
    return React.createElement(
        ErrorBoundary,
        null,
        React.createElement(MyWidget, null)
    );
}

function MyWidget() {
    throw new Error('测试错误');
    return '测试';
}
ReactDOM.render(React.createElement(App, null), document.querySelector('#root'));