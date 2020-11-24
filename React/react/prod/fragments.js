var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            var tableData = [1, 2, 3, 4];
            return React.createElement(
                'table',
                null,
                React.createElement(
                    'tr',
                    null,
                    React.createElement(Columns, null)
                )
            );
        }
    }]);

    return App;
}(React.Component);

var Columns = function (_React$Component2) {
    _inherits(Columns, _React$Component2);

    function Columns() {
        _classCallCheck(this, Columns);

        return _possibleConstructorReturn(this, (Columns.__proto__ || Object.getPrototypeOf(Columns)).apply(this, arguments));
    }

    _createClass(Columns, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                React.Fragment,
                null,
                tableData.map(function (value) {
                    return React.createElement(
                        'td',
                        null,
                        value
                    );
                })
            );
        }
    }]);

    return Columns;
}(React.Component);

function Glossary(props) {
    return React.createElement(
        'dl',
        null,
        props.items.map(function (item) {
            React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    'dt',
                    null,
                    item.name
                ),
                React.createElement(
                    'dd',
                    null,
                    item.des
                )
            );
        })
    );
}

ReactDOM.render(React.createElement(App, null), document.querySelector('#root'));