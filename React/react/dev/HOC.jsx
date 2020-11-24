const DataSource ={

}

class CommentList extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            comments:DataSource.getComments()
        }
    }
    componentDidMount(){
        // 订阅更改
        DataSource.addChangeListener(this.handleChange)
    }
    componentDidUnmount(){
        // 清楚订阅
        DataSource.removeChangeListener(this.handleChange)
    }

    handleChange(){
        this.state = {
            comments:DataSource.getComments()
        }
    }
    
    render(){
        return (
            <div>
                {
                    this.state.comments.map(comment=>(
                        <Comment comment={comment} key={comment.id}  /> 
                    ))
                }
            </div>
        )
    }

}


class BlogPost extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.state = {
        blogPost: DataSource.getBlogPost(props.id)
      };
    }
  
    componentDidMount() {
      DataSource.addChangeListener(this.handleChange);
    }
  
    componentWillUnmount() {
      DataSource.removeChangeListener(this.handleChange);
    }
  
    handleChange() {
      this.setState({
        blogPost: DataSource.getBlogPost(this.props.id)
      });
    }
  
    render() {
      return <TextBlock text={this.state.blogPost} />;
    }
  }


  function withSubscription(WrappedComponent,selectData){
      return class extends React.Component{
          constructor(props){
              super(props)
              this.handleChange = this.handleChange.bind(this)
              this.state = {
                  data:selectData(DataSource,props)
              }
          }

          componentDidMount() {
            DataSource.addChangeListener(this.handleChange);
          }
        
          componentWillUnmount() {
            DataSource.removeChangeListener(this.handleChange);
          }

          handleChange() {
            this.setState({
              data: selectData(DataSource, this.props)
            });
          }
      
          render() {
            // ... 并使用新数据渲染被包装的组件!
            // 请注意，我们可能还会传递其他属性
            return <WrappedComponent data={this.state.data} {...this.props} />;
          }


      }
  }

//   function logProps(InputComponent){
//     InputComponent.prototype.componentDidUpdate=function(prevProps){
//         console.log('current props:',this.props)
//         console.log('previous props:',this.props)
//     }

//     return InputComponent
//   }

function logProps(InputComponent){
    return class extends React.Component{
        componentDidUpdate(prevProps){
            console.log('current props:',this.props)
            console.log('previous props:',this.props)
        }
        render(){
            return <InputComponent {...this.props} />
        }
    }
}