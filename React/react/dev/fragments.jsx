class App extends React.Component {
    render () {
        let tableData = [1, 2, 3, 4,];
        return <table>
            <tr>
                <Columns></Columns>
            </tr>
        </table>
    }
}

class Columns extends React.Component {
    render () {
        return <React.Fragment>
            {tableData.map(value => <td>{value}</td>)}
        </React.Fragment>
    }
}

function Glossary (props) {
    return (
        <dl>
            {
                props.items.map(item => {
                    <React.Fragment>
                        <dt>{item.name}</dt>
                        <dd>{item.des}</dd>
                    </React.Fragment>
                })
            }
        </dl>
    )
}

ReactDOM.render(<App />, document.querySelector('#root'))


