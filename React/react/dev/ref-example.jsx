/*  画圆环+动画
class DrawPanel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 1
        }
    }
    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    render () {
        return (
            <div style={{ width: "100%", height: "400px" }}>
                <DrawRing value={this.state.value} />
                {this.state.value}
                <input type="range" value={this.state.value} onChange={
                    this.handleChange
                } />
            </div>
        )
    }
}


class DrawRing extends React.Component {
    canvas = React.createRef()
    constructor(props) {
        super(props);
    }
    componentDidMount () {
        this.currentValue = 0;
        this.ctx = this.canvas.current.getContext('2d');
        this.clear();
        this.draw();
        this.canvas.current.parentNode.addEventListener('resize', () => {
            this.clear();
            this.draw();
        })
    }

    componentDidUpdate () {
        this.clear();
        this.draw();
    }

    clear () {
        const canvas = this.canvas.current;
        const parentNode = canvas.parentNode;
        canvas.width = parentNode.offsetWidth;
        canvas.height = parentNode.offsetHeight;
        this.centerPos = [canvas.width / 2, canvas.height / 2];
    }
    draw () {
        let { value = 10, color = 'red', duration = 1000, bgColor = '#e3e3e3', wd = 0 } = this.props,
            ctx = this.ctx,
            centerPos = this.centerPos,
            r = 1.5 * Math.min.apply(null, centerPos) / 2,
            currentValue = this.currentValue, speed = 3.6 * 10 * (value - currentValue) / duration;
        speed = Math[speed >0 ?  'max': 'min'](speed > 0 ? 0.0001 : -0.0001, speed);
        wd = wd || r / 5;
        currentValue += speed;
        if (speed > 0 && currentValue + speed > value) {
            currentValue = value
        }
        if (speed < 0 && currentValue + speed < value) {
            currentValue = value
        }
        ctx.beginPath();
        ctx.arc(centerPos[0], centerPos[1], r, 0, Math.PI * 2 * (currentValue / 100), false);
        ctx.strokeStyle = color;
        ctx.lineWidth = wd;
        ctx.stroke()
        ctx.closePath();
        ctx.beginPath();
        ctx.arc(centerPos[0], centerPos[1], r, Math.PI * 2 * (currentValue / 100), Math.PI * 2, false);
        ctx.strokeStyle = bgColor;
        ctx.lineWidth = wd;
        ctx.stroke()
        ctx.closePath();
        ctx.beginPath();
        ctx.font = "normal normal normal " + r / 4 + "px arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillStyle = color;
        ctx.fillText((Math.ceil(currentValue*100)/100).toFixed(2)  + "%", centerPos[0], centerPos[1])
        ctx.closePath();

        this.currentValue = Number(currentValue);
        clearTimeout(this.timer);
        if (currentValue != value) {
            this.timer = setTimeout(() => {
                this.clear();
                this.draw();
            })
        }
    }
    render () {
        return <div style={{ height: "100%", width: "100%" }}><canvas height={0} width={0} ref={this.canvas}>Your browser does not support the canvas element.</canvas></div>
    }
}

ReactDOM.render(<DrawPanel />, document.querySelector('#root-canvas'))
*/

class Shop extends React.Component {
    state = {
        goods: [
            {
                name: "苹果",
                count: 0
            },
            {
                name: "香蕉",
                count: 1
            },
            {
                name: "樱桃",
                count: 0
            }
        ],
    }
    buy = (value, index, e) => {
        let newGoods = this.state.goods.map(function (good) {
            if (value.name == good.name) good.count += 1
            return good
        })
        this.setState({
            goods: newGoods
        })
        e.persist()
        this.cartRef.add({
            left: e.nativeEvent.x,
            top: e.nativeEvent.y,
        })
    }
    onRef = ref => {
        this.cartRef = ref
    }
    del = (value, index) => {
        let newGoods = this.state.goods.map(function (good) {
            if (value.name == good.name) good.count -= 1
            return good
        })
        this.setState({
            goods: newGoods
        })
    }
  
    render () {
        const goods = this.state.goods,
            buyGoods = goods.filter(value => {
                return value.count != 0
            })
        return <div  style={{ position: 'relative' }}>
            <Goods data={goods} buy={this.buy}></Goods>
            <Cart onRef={this.onRef} data={buyGoods} del={this.del}></Cart>
        </div>
    }
}

class Goods extends React.Component {
    buy = (value, index, e) => {
        this.props.buy(value, index, e)
    }
    render () {
        const data = this.props.data;
        return <ul>
            {
                data.map((value, index) => (<li onClick={(e) => { this.buy(value, index, e) }} key={index}><span>{value.name}</span><span>{value.count}</span></li>))
            }
        </ul>
    }
}

class Cart extends React.Component {
    refWrap = React.createRef()
    constructor(props) {
        super(props)
        this.props.onRef(this);
    }
    del = (value, index) => {
        this.props.del(value, index)
    }
    state = {
        balls: []
    }
    add = (ball) => {

        this.setState({
            balls: [
                ...this.state.balls,
                ball
            ]
        })
    }
    animated(){
        clearTimeout(this.timer);
        if(this.state.balls.length>0){
            setTimeout(()=>{

            },1000)
        }
    }
    render () {
        const data = this.props.data;
        const balls = this.state.balls;
        return <ul ref={this.refWrap}>
            {
                balls.map((ball, index) => <li className="ball" key={'ball' + index} style={ball}></li>)
            }
            {
                data.map((value, index) => (<li onClick={() => { this.del(value, index) }} key={index}><span>{value.name}</span><span>{value.count}</span></li>))
            }
        </ul>
    }
}


ReactDOM.render(<Shop />, document.querySelector('#root-cart'))