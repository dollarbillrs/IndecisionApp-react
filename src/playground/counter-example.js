
class Counter extends React.Component {
    constructor(props){
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        }
    }
    handleAddOne() {
        this.setState((prevState) => {
        return {
            count: prevState.count + 1
        };
        });
    }
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            };
        });
    }
    handleReset() {
        this.setState(() => {
            return {
                count: 0
            };
            });
    }
    componentDidMount(){
        //console.log('component did mount');
        const theCount = localStorage.getItem("count");
        const count = parseInt(theCount, 10);
        if (!isNaN(count)){
            this.setState(() => ({ count }));
        }
        
    }
    componentDidUpdate(prevProps, prevState){
        // console.log('component updated');
        if (prevState.count !== this.state.count){
            localStorage.setItem("count", this.state.count);
        }
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}
Counter.defaultProps = {
    count: 0
};
ReactDOM.render(<Counter count={-3}/>,document.getElementById('app'));