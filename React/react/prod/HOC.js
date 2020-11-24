var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DataSource = {};

var CommentList = function (_React$Component) {
    _inherits(CommentList, _React$Component);

    function CommentList(props) {
        _classCallCheck(this, CommentList);

        var _this = _possibleConstructorReturn(this, (CommentList.__proto__ || Object.getPrototypeOf(CommentList)).call(this, props));

        _this.handleChange = _this.handleChange.bind(_this);
        _this.state = {
            comments: DataSource.getComments()
        };
        return _this;
    }

    _createClass(CommentList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // 订阅更改
            DataSource.addChangeListener(this.handleChange);
        }
    }, {
        key: 'componentDidUnmount',
        value: function componentDidUnmount() {
            // 清楚订阅
            DataSource.removeChangeListener(this.handleChange);
        }
    }, {
        key: 'handleChange',
        value: function handleChange() {
            this.state = {
                comments: DataSource.getComments()
            };
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                this.state.comments.map(function (comment) {
                    return React.createElement(Comment, { comment: comment, key: comment.id });
                })
            );
        }
    }]);

    return CommentList;
}(React.Component);

var BlogPost = function (_React$Component2) {
    _inherits(BlogPost, _React$Component2);

    function BlogPost(props) {
        _classCallCheck(this, BlogPost);

        var _this2 = _possibleConstructorReturn(this, (BlogPost.__proto__ || Object.getPrototypeOf(BlogPost)).call(this, props));

        _this2.handleChange = _this2.handleChange.bind(_this2);
        _this2.state = {
            blogPost: DataSource.getBlogPost(props.id)
        };
        return _this2;
    }

    _createClass(BlogPost, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            DataSource.addChangeListener(this.handleChange);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            DataSource.removeChangeListener(this.handleChange);
        }
    }, {
        key: 'handleChange',
        value: function handleChange() {
            this.setState({
                blogPost: DataSource.getBlogPost(this.props.id)
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return React.createElement(TextBlock, { text: this.state.blogPost });
        }
    }]);

    return BlogPost;
}(React.Component);

function withSubscription(WrappedComponent, selectData) {
    return function (_React$Component3) {
        _inherits(_class, _React$Component3);

        function _class(props) {
            _classCallCheck(this, _class);

            var _this3 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

            _this3.handleChange = _this3.handleChange.bind(_this3);
            _this3.state = {
                data: selectData(DataSource, props)
            };
            return _this3;
        }

        _createClass(_class, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                DataSource.addChangeListener(this.handleChange);
            }
        }, {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
                DataSource.removeChangeListener(this.handleChange);
            }
        }, {
            key: 'handleChange',
            value: function handleChange() {
                this.setState({
                    data: selectData(DataSource, this.props)
                });
            }
        }, {
            key: 'render',
            value: function render() {
                // ... 并使用新数据渲染被包装的组件!
                // 请注意，我们可能还会传递其他属性
                return React.createElement(WrappedComponent, Object.assign({ data: this.state.data }, this.props));
            }
        }]);

        return _class;
    }(React.Component);
}

//   function logProps(InputComponent){
//     InputComponent.prototype.componentDidUpdate=function(prevProps){
//         console.log('current props:',this.props)
//         console.log('previous props:',this.props)
//     }

//     return InputComponent
//   }

function logProps(InputComponent) {
    return function (_React$Component4) {
        _inherits(_class2, _React$Component4);

        function _class2() {
            _classCallCheck(this, _class2);

            return _possibleConstructorReturn(this, (_class2.__proto__ || Object.getPrototypeOf(_class2)).apply(this, arguments));
        }

        _createClass(_class2, [{
            key: 'componentDidUpdate',
            value: function componentDidUpdate(prevProps) {
                console.log('current props:', this.props);
                console.log('previous props:', this.props);
            }
        }, {
            key: 'render',
            value: function render() {
                return React.createElement(InputComponent, this.props);
            }
        }]);

        return _class2;
    }(React.Component);
}