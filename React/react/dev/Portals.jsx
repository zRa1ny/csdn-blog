class Test extends React.Component{
    render(){
        return ReactDOM.createPortal(
            <div>test</div>,
            document.querySelector('body')
        )
    }
}

ReactDOM.render(<Test></Test>,document.querySelector("#root"))