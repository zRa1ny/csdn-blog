class NameForm extends React.Component {
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.input = React.createRef();
    }
    handleSubmit (){
        alert('a name was submit :'+ this.input.current.value)
        event.preventDefault();
    }
    render (){
        return (
            <form onSubmit = { this.handleSubmit }>
                <label htmlFor="name"> Name: </label>
                <input type="text" ref={this.input}  id="name" defaultValue="blob"/>
                <input type="submit" value="submit"/>
            </form>
        )
    }
    
}

class FileInput extends React.Component{
    constructor(props){
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.input = React.createRef();
    }
    handleSubmit (event){
        event.preventDefault();
        console.log(this.input.current.files[0])
    }
    render (){
        return (
            <form onSubmit = { this.handleSubmit }>
                <label htmlFor="name"> Name: </label>
                <input type="file" ref={this.input}  id="name" />
                <input type="submit" value="submit"/>
            </form>
        )
    }
}

ReactDOM.render(<FileInput /> , document.querySelector('#root'))