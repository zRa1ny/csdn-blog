var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MouseTracker = function (_React$Component) {
    _inherits(MouseTracker, _React$Component);

    function MouseTracker(props) {
        _classCallCheck(this, MouseTracker);

        var _this = _possibleConstructorReturn(this, (MouseTracker.__proto__ || Object.getPrototypeOf(MouseTracker)).call(this, props));

        _this.handleMouseMove = _this.handleMouseMove.bind(_this);
        console.log(_this);
        _this.state = {
            x: 0,
            y: 0
        };
        return _this;
    }

    _createClass(MouseTracker, [{
        key: 'handleMouseMove',
        value: function handleMouseMove(event) {
            console.log(this);
            this.setState({
                x: event.clientX,
                y: event.clientY
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { style: { height: '100vh' }, onMouseMove: this.handleMouseMove },
                React.createElement(
                    'h1',
                    null,
                    ' \u9F20\u6807\u5F53\u524D\u7684\u4F4D\u7F6E\uFF1A(',
                    this.state.x,
                    ', ',
                    this.state.y,
                    ') '
                )
            );
        }
    }]);

    return MouseTracker;
}(React.Component);

var Mouse = function (_React$Component2) {
    _inherits(Mouse, _React$Component2);

    function Mouse(props) {
        _classCallCheck(this, Mouse);

        var _this2 = _possibleConstructorReturn(this, (Mouse.__proto__ || Object.getPrototypeOf(Mouse)).call(this, props));

        _this2.handleMouseMove = _this2.handleMouseMove.bind(_this2);
        _this2.state = {
            x: 0,
            y: 0
        };
        return _this2;
    }

    _createClass(Mouse, [{
        key: 'handleMouseMove',
        value: function handleMouseMove(event) {
            this.setState({
                x: event.clientX,
                y: event.clientY
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                { style: { height: '100vh' }, onMouseMove: this.handleMouseMove },
                React.createElement(
                    'h1',
                    null,
                    ' \u9F20\u6807\u5F53\u524D\u7684\u4F4D\u7F6E\uFF1A(',
                    this.state.x,
                    ', ',
                    this.state.y,
                    ') '
                ),
                this.props.diyrender(this.state)
            );
        }
    }]);

    return Mouse;
}(React.Component);

var Cat = function (_React$Component3) {
    _inherits(Cat, _React$Component3);

    function Cat() {
        _classCallCheck(this, Cat);

        return _possibleConstructorReturn(this, (Cat.__proto__ || Object.getPrototypeOf(Cat)).apply(this, arguments));
    }

    _createClass(Cat, [{
        key: 'render',
        value: function render() {
            var mouse = this.props.mouse;
            return React.createElement('img', { src: '/cat.jpg', style: { position: 'absolute', left: mouse.x, top: mouse.y } });
        }
    }]);

    return Cat;
}(React.Component);

ReactDOM.render(React.createElement(Mouse, { diyrender: function diyrender(data) {
        return React.createElement(Cat, { mouse: data });
    } }), document.querySelector('#root'));