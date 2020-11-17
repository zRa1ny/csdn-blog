class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false
        }
    }
    static getDerivedStateFromError (error) {
        // 更新state 湿的下一次渲染能够显示降级之后的UI
        return { hasError: true }
    }

    componentDidCatch(err,errInfo){
        console.log(err,errInfo)
        // logErrorToMyService(err,errInfo);// 上传服务器
    }

    render(){
        if(this.state.hasError){
            // 你可以自定义降级之后的ui并渲染
            return <h1>something went wrong.</h1>
        }

        return this.props.children
    }
}
function App(){
    return (
        <ErrorBoundary>
            <MyWidget />
        </ErrorBoundary>
    )
}

function MyWidget(){
    throw new Error('测试错误')
    return '测试'
}
ReactDOM.render(<App/>, document.querySelector('#root'))