var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// const ThemeContext = React.createContext('22')
// ThemeContext.displayName = 'MyDisplayName';
// function TestProvider (props) {
//     return (
//         <ThemeContext.Provider value={props.value}>
//             <TestConsumer></TestConsumer>
//             <TestClass />
//         </ThemeContext.Provider>
//     )
// }
// function TestConsumer (props) {

//     return (
//         <ThemeContext.Consumer>
//             {value => <div>{value}</div>}
//         </ThemeContext.Consumer>

//     )
// }

// class TestClass extends React.Component {
//     static contextType = ThemeContext
//     render () {
//         return <div>{this.context}</div>
//     }
// }

// class MyControl extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             value1: "1"
//         }
//     }
//     changeHandle = () => {
//         this.setState({
//             value1: 12
//         })
//     }
//     render () {
//         return (
//             <div>
//                 <ThemeContext.Consumer>
//                     {value => <div>{value}</div>}
//                 </ThemeContext.Consumer>
//                 <TestProvider value={this.state.value1} />
//                 <div>{this.state.value1}</div>
//                 <button onClick={this.changeHandle}> change </button>
//             </div>

//         )
//     }
// }

// function Parent(){
//     return <TestChilren name={'子组件name'}>
//           <TestGrandson name={'孙组件name'}></TestGrandson>
//     </TestChilren>
// }

// function TestChilren(props){
//     return <div> <p>子组件：{props.name}</p> {props.children}</div>
// }
// function TestGrandson(props){
//     return <div> <p>孙组件：{props.name}</p></div>
// }
// const themes = {
//     light:{
//         color:'#000000',
//         backgroundColor:'#eeeeee'
//     },
//     dark:{
//         color:'#ffffff',
//         backgroundColor:'#222222'
//     }
// }

// const ThemesContext = React.createContext(
//     themes.dark
// )

// class ThemeButton extends React.Component{
//     static contextType = ThemesContext
//     render(){
//         let props = this.props;
//         let theme = this.context;
//         return (
//             <button {...props} style={theme}></button>
//         )
//     }
// }

// function Toolbar (props){
//     return (
//         <ThemeButton onClick={props.changeTheme}>
//             changeTheme
//         </ThemeButton>
//     )
// }


// class App extends React.Component{
//     constructor(props){
//         super(props)
//         this.state={
//             theme:themes.light
//         }

//         this.toggleTheme = () => {
//             this.setState(state =>({
//                 theme:state.theme === themes.dark ? themes.light : themes.dark
//             }))
//         }
//     }

//     render() {
//         // 在 ThemeProvider 内部的 ThemedButton 按钮组件使用 state 中的 theme 值，
//         // 而外部的组件使用默认的 theme 值
//         return (
//           <div>
//             <ThemesContext.Provider value={this.state.theme}>
//               <Toolbar changeTheme={this.toggleTheme} />
//             </ThemesContext.Provider>
//           </div>
//         );
//       }
// }
var themes = {
    light: {
        color: '#000000',
        backgroundColor: '#eeeeee'
    },
    dark: {
        color: '#ffffff',
        backgroundColor: '#222222'
    }
};
var ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: function toggleTheme() {}
});
// function ThemeTogglerButton () {
//     return (
//         <ThemeContext.Consumer>
//             {
//                 ({ theme, toggleTheme }) => (<button onClick={toggleTheme} style={theme}>
//                     Toggle Theme
//                 </button>)
//             }
//         </ThemeContext.Consumer>
//     )
// }

// class App extends React.Component {
//     constructor(props) {
//         super(props)

//         this.toggleTheme = () => {
//             this.setState(state => ({
//                 theme:
//                     state.theme === themes.dark
//                         ? themes.light
//                         : themes.dark,
//             }));
//         }

//         this.state = {
//             theme: themes.light,
//             toggleTheme: this.toggleTheme,
//         };
//     }

//     render () {
//         // 整个 state 都被传递进 provider
//         return (
//             <ThemeContext.Provider value={this.state}>
//                 <Content />
//             </ThemeContext.Provider>
//         );
//     }
// }

// function Content() {
//     return (
//       <div>
//         <ThemeTogglerButton />
//       </div>
//     );
//   }

var ThemeContext = React.createContext('light');
var UserContext = React.createContext({
    name: "Guest"
});

var App = function (_React$Component) {
    _inherits(App, _React$Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                signedInUserm = _props.signedInUserm,
                theme = _props.theme;

            return React.createElement(
                ThemeContext.Provider,
                { value: theme },
                React.createElement(
                    UserContext.Provider,
                    null,
                    React.createElement(Layout, null)
                )
            );
        }
    }]);

    return App;
}(React.Component);

function Layout() {
    return React.createElement(
        'div',
        null,
        React.createElement(Content, null)
    );
}

// 一个组件可能会消费多个context
function Content() {
    return React.createElement(
        ThemeContext.Consumer,
        null,
        function (theme) {
            return React.createElement(
                UserContext.Consumer,
                null,
                function (user) {
                    return React.createElement(
                        'div',
                        null,
                        JSON.stringify(user),
                        ' => ',
                        theme
                    );
                }
            );
        }
    );
}

ReactDOM.render(React.createElement(App, { theme: [1, 2] }), document.querySelector('#root'));