var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NameForm = function (_React$Component) {
    _inherits(NameForm, _React$Component);

    function NameForm(props) {
        _classCallCheck(this, NameForm);

        var _this = _possibleConstructorReturn(this, (NameForm.__proto__ || Object.getPrototypeOf(NameForm)).call(this, props));

        _this.handleSubmit = _this.handleSubmit.bind(_this);
        _this.input = React.createRef();
        return _this;
    }

    _createClass(NameForm, [{
        key: "handleSubmit",
        value: function handleSubmit() {
            alert('a name was submit :' + this.input.current.value);
            event.preventDefault();
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "form",
                { onSubmit: this.handleSubmit },
                React.createElement(
                    "label",
                    { htmlFor: "name" },
                    " Name: "
                ),
                React.createElement("input", { type: "text", ref: this.input, id: "name", defaultValue: "blob" }),
                React.createElement("input", { type: "submit", value: "submit" })
            );
        }
    }]);

    return NameForm;
}(React.Component);

var FileInput = function (_React$Component2) {
    _inherits(FileInput, _React$Component2);

    function FileInput(props) {
        _classCallCheck(this, FileInput);

        var _this2 = _possibleConstructorReturn(this, (FileInput.__proto__ || Object.getPrototypeOf(FileInput)).call(this, props));

        _this2.handleSubmit = _this2.handleSubmit.bind(_this2);
        _this2.input = React.createRef();
        return _this2;
    }

    _createClass(FileInput, [{
        key: "handleSubmit",
        value: function handleSubmit(event) {
            event.preventDefault();
            console.log(this.input.current.files[0]);
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "form",
                { onSubmit: this.handleSubmit },
                React.createElement(
                    "label",
                    { htmlFor: "name" },
                    " Name: "
                ),
                React.createElement("input", { type: "file", ref: this.input, id: "name" }),
                React.createElement("input", { type: "submit", value: "submit" })
            );
        }
    }]);

    return FileInput;
}(React.Component);

ReactDOM.render(React.createElement(FileInput, null), document.querySelector('#root'));