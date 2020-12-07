var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var appRoot = document.getElementById('app-root');
var modalRoot = document.getElementById('modal-root');

var Modal = function (_React$Component) {
    _inherits(Modal, _React$Component);

    function Modal(props) {
        _classCallCheck(this, Modal);

        var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, props));

        _this.el = document.createElement('div');
        return _this;
    }

    _createClass(Modal, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // 在 Modal 的所有子元素被挂载后，
            // 这个 portal 元素会被嵌入到 DOM 树中，
            // 这意味着子元素将被挂载到一个分离的 DOM 节点中。
            // 如果要求子组件在挂载时可以立刻接入 DOM 树，
            // 例如衡量一个 DOM 节点，
            // 或者在后代节点中使用 ‘autoFocus’，
            // 则需添加 state 到 Modal 中，
            // 仅当 Modal 被插入 DOM 树中才能渲染子元素。
            modalRoot.appendChild(this.el);
        }
    }, {
        key: 'componentDidUnMount',
        value: function componentDidUnMount() {
            modalRoot.removeChild(this.el);
        }
    }, {
        key: 'render',
        value: function render() {
            return ReactDOM.createPortal(this.props.children, this.el);
        }
    }]);

    return Modal;
}(React.Component);

var Parent = function (_React$Component2) {
    _inherits(Parent, _React$Component2);

    function Parent(props) {
        _classCallCheck(this, Parent);

        var _this2 = _possibleConstructorReturn(this, (Parent.__proto__ || Object.getPrototypeOf(Parent)).call(this, props));

        _this2.state = {
            clicks: 0
        };
        _this2.handleClick = _this2.handleClick.bind(_this2);
        return _this2;
    }

    _createClass(Parent, [{
        key: 'handleClick',
        value: function handleClick() {
            //当子元素中的按钮被点击时
            // 这个将会触发更新父元素阿state
            // 即视这个按钮在dom中不是直接的关联的后台

            this.setState(function (state) {
                return {
                    clicks: state.clicks + 1
                };
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { onClick: this.handleClick },
                React.createElement(
                    'p',
                    null,
                    'Number of clicks : ',
                    this.state.clicks
                ),
                React.createElement(
                    Profiler,
                    { id: 'Modal', onRender: onRenderCallback },
                    React.createElement(
                        Modal,
                        null,
                        React.createElement(Child, null)
                    )
                )
            );
        }
    }]);

    return Parent;
}(React.Component);

function onRenderCallback(id, // 发生提交的 Profiler 树的 “id”
phase, // "mount" （如果组件树刚加载） 或者 "update" （如果它重渲染了）之一
actualDuration, // 本次更新 committed 花费的渲染时间
baseDuration, // 估计不使用 memoization 的情况下渲染整颗子树需要的时间
startTime, // 本次更新中 React 开始渲染的时间
commitTime, // 本次更新中 React committed 的时间
interactions // 属于本次更新的 interactions 的集合
) {
    console.log(arguments);
}

function Child() {
    return React.createElement(
        'div',
        { className: 'modal' },
        React.createElement(
            'button',
            null,
            'clcik'
        )
    );
}

ReactDOM.render(React.createElement(Parent, null), appRoot);