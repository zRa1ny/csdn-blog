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

class FancyButton extends React.Component{
    focus(){}
}

const MFancyButton = logProps(FancyButton);

const ref = React.createRef();
// 我们导入的 FancyButton 组件是高阶组件（HOC）LogProps。
// 尽管渲染结果将是一样的，
// 但我们的 ref 将指向 LogProps 而不是内部的 FancyButton 组件！
// 这意味着我们不能调用例如 ref.current.focus() 这样的方法
<MFancyButton label="click me" handleClick={handleClick} ref={ref} />
function logProps(Component){
    class LogProps extends React.Component{
        componentDidUpdate(prevProps){
            console.log('old props:',prevProps)
            console.log('new props:',this.props)
        }
        render(){
            const {forwardedRef,...res} = this.props;
            return <Component {...res}  ref={forwardedRef} />
        }
    }

    return React.forwardRef((props,ref)=>{
            return  <LogProps {...props}  forwardRef={ref} />  
    })
}
