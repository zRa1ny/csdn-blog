class MouseTracker extends React.Component{
    constructor(props){
        super(props)
        this.handleMouseMove=  this.handleMouseMove.bind(this);
        console.log(this)
        this.state = {
            x:0,
            y:0
        }
    }
    handleMouseMove(event){
        console.log(this)
        this.setState({
            x:event.clientX,
            y:event.clientY
        })
    }
    render(){
        return (
            <div style={{height:'100vh'}} onMouseMove={this.handleMouseMove}>
                <h1> 鼠标当前的位置：({this.state.x}, {this.state.y}) </h1>
            </div>
        )
    }
}
class Mouse extends React.Component{
    constructor(props){
        super(props)
        this.handleMouseMove=  this.handleMouseMove.bind(this);
        this.state = {
            x:0,
            y:0
        }
    }
    handleMouseMove(event){
        this.setState({
            x:event.clientX,
            y:event.clientY
        })
    }
    render(){
        return (
            <div style={{height:'100vh'}} onMouseMove={this.handleMouseMove}>
                <h1> 鼠标当前的位置：({this.state.x}, {this.state.y}) </h1>
                {this.props.diyrender(this.state)}
            </div>
        )
    }
}
class Cat extends React.Component {
    render() {
      const mouse = this.props.mouse;
      return (
        <img src="/cat.jpg" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
      );
    }
  }
ReactDOM.render(<Mouse diyrender={data=><Cat mouse={data} />}></Mouse> , document.querySelector('#root'))