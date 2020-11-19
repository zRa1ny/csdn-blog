var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*  画圆环+动画
class DrawPanel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 1
        }
    }
    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    render () {
        return (
            <div style={{ width: "100%", height: "400px" }}>
                <DrawRing value={this.state.value} />
                {this.state.value}
                <input type="range" value={this.state.value} onChange={
                    this.handleChange
                } />
            </div>
        )
    }
}


class DrawRing extends React.Component {
    canvas = React.createRef()
    constructor(props) {
        super(props);
    }
    componentDidMount () {
        this.currentValue = 0;
        this.ctx = this.canvas.current.getContext('2d');
        this.clear();
        this.draw();
        this.canvas.current.parentNode.addEventListener('resize', () => {
            this.clear();
            this.draw();
        })
    }

    componentDidUpdate () {
        this.clear();
        this.draw();
    }

    clear () {
        const canvas = this.canvas.current;
        const parentNode = canvas.parentNode;
        canvas.width = parentNode.offsetWidth;
        canvas.height = parentNode.offsetHeight;
        this.centerPos = [canvas.width / 2, canvas.height / 2];
    }
    draw () {
        let { value = 10, color = 'red', duration = 1000, bgColor = '#e3e3e3', wd = 0 } = this.props,
            ctx = this.ctx,
            centerPos = this.centerPos,
            r = 1.5 * Math.min.apply(null, centerPos) / 2,
            currentValue = this.currentValue, speed = 3.6 * 10 * (value - currentValue) / duration;
        speed = Math[speed >0 ?  'max': 'min'](speed > 0 ? 0.0001 : -0.0001, speed);
        wd = wd || r / 5;
        currentValue += speed;
        if (speed > 0 && currentValue + speed > value) {
            currentValue = value
        }
        if (speed < 0 && currentValue + speed < value) {
            currentValue = value
        }
        ctx.beginPath();
        ctx.arc(centerPos[0], centerPos[1], r, 0, Math.PI * 2 * (currentValue / 100), false);
        ctx.strokeStyle = color;
        ctx.lineWidth = wd;
        ctx.stroke()
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(centerPos[0], centerPos[1], r, Math.PI * 2 * (currentValue / 100), Math.PI * 2, false);
        ctx.strokeStyle = bgColor;
        ctx.lineWidth = wd;
        ctx.stroke()
        ctx.closePath();
        ctx.beginPath();
        ctx.font = "normal normal normal " + r / 4 + "px arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = color;
        ctx.fillText((Math.ceil(currentValue*100)/100).toFixed(2)  + "%", centerPos[0], centerPos[1])
        ctx.closePath();

        this.currentValue = Number(currentValue);
        clearTimeout(this.timer);
        if (currentValue != value) {
            this.timer = setTimeout(() => {
                this.clear();
                this.draw();
            })
        }
    }
    render () {
        return <div style={{ height: "100%", width: "100%" }}><canvas height={0} width={0} ref={this.canvas}>Your browser does not support the canvas element.</canvas></div>
    }
}

ReactDOM.render(<DrawPanel />, document.querySelector('#root-canvas'))
*/

var Shop = function (_React$Component) {
    _inherits(Shop, _React$Component);

    function Shop() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Shop);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Shop.__proto__ || Object.getPrototypeOf(Shop)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            goods: [{
                name: "苹果",
                count: 0
            }, {
                name: "香蕉",
                count: 1
            }, {
                name: "樱桃",
                count: 0
            }]
        }, _this.buy = function (value, index, e) {
            var newGoods = _this.state.goods.map(function (good) {
                if (value.name == good.name) good.count += 1;
                return good;
            });
            _this.setState({
                goods: newGoods
            });
            e.persist();
            _this.cartRef.add({
                left: e.nativeEvent.x,
                top: e.nativeEvent.y
            });
        }, _this.onRef = function (ref) {
            _this.cartRef = ref;
        }, _this.del = function (value, index) {
            var newGoods = _this.state.goods.map(function (good) {
                if (value.name == good.name) good.count -= 1;
                return good;
            });
            _this.setState({
                goods: newGoods
            });
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Shop, [{
        key: "render",
        value: function render() {
            var goods = this.state.goods,
                buyGoods = goods.filter(function (value) {
                return value.count != 0;
            });
            return React.createElement(
                "div",
                { style: { position: 'relative' } },
                React.createElement(Goods, { data: goods, buy: this.buy }),
                React.createElement(Cart, { onRef: this.onRef, data: buyGoods, del: this.del })
            );
        }
    }]);

    return Shop;
}(React.Component);

var Goods = function (_React$Component2) {
    _inherits(Goods, _React$Component2);

    function Goods() {
        var _ref2;

        var _temp2, _this2, _ret2;

        _classCallCheck(this, Goods);

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_ref2 = Goods.__proto__ || Object.getPrototypeOf(Goods)).call.apply(_ref2, [this].concat(args))), _this2), _this2.buy = function (value, index, e) {
            _this2.props.buy(value, index, e);
        }, _temp2), _possibleConstructorReturn(_this2, _ret2);
    }

    _createClass(Goods, [{
        key: "render",
        value: function render() {
            var _this3 = this;

            var data = this.props.data;
            return React.createElement(
                "ul",
                null,
                data.map(function (value, index) {
                    return React.createElement(
                        "li",
                        { onClick: function onClick(e) {
                                _this3.buy(value, index, e);
                            }, key: index },
                        React.createElement(
                            "span",
                            null,
                            value.name
                        ),
                        React.createElement(
                            "span",
                            null,
                            value.count
                        )
                    );
                })
            );
        }
    }]);

    return Goods;
}(React.Component);

var Cart = function (_React$Component3) {
    _inherits(Cart, _React$Component3);

    function Cart(props) {
        _classCallCheck(this, Cart);

        var _this4 = _possibleConstructorReturn(this, (Cart.__proto__ || Object.getPrototypeOf(Cart)).call(this, props));

        _this4.refWrap = React.createRef();

        _this4.del = function (value, index) {
            _this4.props.del(value, index);
        };

        _this4.state = {
            balls: []
        };

        _this4.add = function (ball) {

            _this4.setState({
                balls: [].concat(_toConsumableArray(_this4.state.balls), [ball])
            });
        };

        _this4.props.onRef(_this4);
        return _this4;
    }

    _createClass(Cart, [{
        key: "animated",
        value: function animated() {
            clearTimeout(this.timer);
            if (this.state.balls.length > 0) {
                setTimeout(function () {}, 1000);
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _this5 = this;

            var data = this.props.data;
            var balls = this.state.balls;
            return React.createElement(
                "ul",
                { ref: this.refWrap },
                balls.map(function (ball, index) {
                    return React.createElement("li", { className: "ball", key: 'ball' + index, style: ball });
                }),
                data.map(function (value, index) {
                    return React.createElement(
                        "li",
                        { onClick: function onClick() {
                                _this5.del(value, index);
                            }, key: index },
                        React.createElement(
                            "span",
                            null,
                            value.name
                        ),
                        React.createElement(
                            "span",
                            null,
                            value.count
                        )
                    );
                })
            );
        }
    }]);

    return Cart;
}(React.Component);

ReactDOM.render(React.createElement(Shop, null), document.querySelector('#root-cart'));