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
}
var ThemeContext = React.createContext({
    theme: themes.dark,
    toggleTheme: () => { }
})
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
    name:"Guest"
})
class App extends React.Component{
    render(){
        const {signedInUserm , theme} = this.props;
        return (
            <ThemeContext.Provider value={theme}> 
                <UserContext.Provider>
                    <Layout />
                </UserContext.Provider>
            </ThemeContext.Provider>
        )
    }
}

function Layout(){
    return (
        <div>
            {/* <Sidebar /> */}
            <Content />
        </div>
    )
}

// 一个组件可能会消费多个context
function Content(){
    return (
        <ThemeContext.Consumer>
            {
                theme => (
                    <UserContext.Consumer>
                        {
                            user => (
                               <div>
                                   {JSON.stringify(user)} => {theme}
                               </div>
                            )
                        }
                    </UserContext.Consumer>
                )
            }
        </ThemeContext.Consumer>
    )
}


ReactDOM.render(<App  theme = {[1,2]}/>, document.querySelector('#root'))