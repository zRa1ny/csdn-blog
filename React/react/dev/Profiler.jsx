
const appRoot = document.getElementById('app-root')
const modalRoot = document.getElementById('modal-root')

class Modal extends React.Component {
    constructor(props) {
        super(props)
        this.el = document.createElement('div')
    }
    componentDidMount () {
        // 在 Modal 的所有子元素被挂载后，
        // 这个 portal 元素会被嵌入到 DOM 树中，
        // 这意味着子元素将被挂载到一个分离的 DOM 节点中。
        // 如果要求子组件在挂载时可以立刻接入 DOM 树，
        // 例如衡量一个 DOM 节点，
        // 或者在后代节点中使用 ‘autoFocus’，
        // 则需添加 state 到 Modal 中，
        // 仅当 Modal 被插入 DOM 树中才能渲染子元素。
        modalRoot.appendChild(this.el);
    }
    componentDidUnMount () {
        modalRoot.removeChild(this.el)

    }
    render () {
        return ReactDOM.createPortal(
            this.props.children,
            this.el
        )
    }
}

class Parent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            clicks: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick () {
        //当子元素中的按钮被点击时
        // 这个将会触发更新父元素阿state
        // 即视这个按钮在dom中不是直接的关联的后台

        this.setState(state => ({
            clicks: state.clicks + 1
        }))
    }
    render () {
        return (
            <div onClick={this.handleClick}>
                <p>Number of clicks : {this.state.clicks}</p>
                <Profiler id="Modal" onRender={onRenderCallback}>
                    <Modal>
                        <Child />
                    </Modal>
                </Profiler>
            </div>
        )
    }
}
function onRenderCallback(
    id, // 发生提交的 Profiler 树的 “id”
    phase, // "mount" （如果组件树刚加载） 或者 "update" （如果它重渲染了）之一
    actualDuration, // 本次更新 committed 花费的渲染时间
    baseDuration, // 估计不使用 memoization 的情况下渲染整颗子树需要的时间
    startTime, // 本次更新中 React 开始渲染的时间
    commitTime, // 本次更新中 React committed 的时间
    interactions // 属于本次更新的 interactions 的集合
  ) {
    console.log(arguments)
  }

function Child () {
    return (
        <div className="modal">
            <button>clcik</button>
        </div>
    )
}

ReactDOM.render(<Parent />, appRoot)