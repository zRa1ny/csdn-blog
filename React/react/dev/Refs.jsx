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

// class FancyButton extends React.Component{
//     focus(){}
// }

// const MFancyButton = logProps(FancyButton);

// const ref = React.createRef();
// 我们导入的 FancyButton 组件是高阶组件（HOC）LogProps。
// 尽管渲染结果将是一样的，
// 但我们的 ref 将指向 LogProps 而不是内部的 FancyButton 组件！
// 这意味着我们不能调用例如 ref.current.focus() 这样的方法
/* <MFancyButton label="click me" handleClick={handleClick} ref={ref} />
*/
// class LogProps extends React.Component{
//     componentDidUpdate(prevProps){
//         console.log('old props:',prevProps)
//         console.log('new props:',this.props)
//     }
//     render(){
//         const {forwardedRef,...res} = this.props;
//         return <Component {...res}  ref={forwardedRef} />
//     }
// }
// const WrappedComponent = React.forwardRef((props,ref)=>{
//     return <LogProps  forwardRef={ref} {...props}/>
// })
// const WrappedComponent = React.forwardRef(
//     function myFunction(props,ref){
//         return <LogProps {...props}  forwardRef={ref} />
//     }
// )

// function logProps(Component){
//     class LogProps extends React.Component{

//     }
//     function forwardRef(props,ref){
//         return <LogProps {...props} forwardRef={ref} />
//     }
//     // 在DevTools中为该组件提供一个更有用的显示名
//     // 例如 "ForwardRef(logProps(MyComponent))"
//     const name = Component.displayName || Component.name ;

//     forwardRef.displayName = `logProps(${name})`;
//     return React.forwardRef(forwardRef)
// }

class FormControl extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            feilds: [
                {
                    type: "input",
                    feild: "name"
                },
                {
                    type: "input",
                    feild: "age"
                }
            ],
            main: {
                age: 1,
                name: "张三"
            }
        }
    }
    updateFormData = (feild, value) => {
        
        this.setState({
            main: {
                ...this.state.main,
                [feild]: value
            }
        })
        setTimeout(()=>{
            console.log(this.refsArray)
        },1000)
        // console.log(this)
      
    }
    addRef = (ref) => {
        this.refsArray.push(ref)
    }
    showref = () => {
        console.log(this.refsArray)
    }
    refsArray = []
    render () {
        const feilds = this.state.feilds;
        const main = this.state.main;

        let ref = React.createRef();
        this.refsArray = [ref];
        return (
            <div>
                {/* <RefTextInput ref={ref} /> */}
                <TextInput ref={ref} />
                <button onClick={this.showref}>ref</button>
                <p>{JSON.stringify(this.state.main)}</p>
                {feilds.map((value, index) => {
                    if (value.type == 'input') {
                        return <TextInput updata={this.updateFormData} feild={value.feild} value={main[value.feild]} key={value.feild} addRef={this.addRef} />
                    }
                })}
            </div>
        )
    }
}
class TextInput extends React.Component {
    inputRef = React.createRef()
    constructor(props) {
        super(props)
        console.log(arguments)
    }
    onChange = e => {
        this.props.updata(this.props.feild, e.target.value)
    }
    focus = e => {
        this.inputRef.current.focus()
    }
    render () {
        if (this.props.addRef) this.props.addRef(this.inputRef);
        console.log('render')
        return (
            <div>
                <input type="text" ref={this.inputRef} value={this.props.value ? this.props.value : ''} onChange={this.onChange ? this.onChange : this.focus} />
                <button onClick={this.focus}>focus</button>
            </div>
        )
    }
}

const RefTextInput = logProps(TextInput);
const RefTextInput1 = React.forwardRef((props, ref) => {
    return <TextInput {...props} ref={ref} />;
})

function logProps (Component) {
    class LogProps extends React.Component {
        componentDidUpdate (prevProps) {
            console.log('old props:', prevProps);
            console.log('new props:', this.props);
        }

        render () {
            const { forwardedRef, ...rest } = this.props;

            // 将自定义的 prop 属性 “forwardedRef” 定义为 ref
            return <Component ref={forwardedRef} {...rest} />;
        }
    }

    // 注意 React.forwardRef 回调的第二个参数 “ref”。
    // 我们可以将其作为常规 prop 属性传递给 LogProps，例如 “forwardedRef”
    // 然后它就可以被挂载到被 LogProps 包裹的子组件上。
    return React.forwardRef((props, ref) => {
        return <LogProps {...props} forwardedRef={ref} />;
    });
}

ReactDOM.render(<FormControl />, document.querySelector('#root'))
