class VisTogApp extends React.Component {
    constructor(props){
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
        this.state = {
            label: "Show details",
            isVis: false
        }
    }
    handleToggle(){
        this.setState((prevState) => {
            return {
                label: prevState.isVis ? "Show details" : "Hide details",
                isVis: !prevState.isVis
            }
        });
    }
    render() {
        return (
        <div>
            <h1>Visiblity Toggle</h1>
            <button onClick={this.handleToggle}>{this.state.label}</button>
            <p>{this.state.isVis && "Here are some details to see"}</p>
        </div>
        );
    }
}
ReactDOM.render(<VisTogApp />,document.getElementById('app'));


/* let isVis = false;
const onToggleVis = () => {
    isVis = !isVis;
    renderStuff();
};

const appRoot = document.getElementById('app');
const renderStuff = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onToggleVis}>{isVis ? "Hide details" : "Show details"}</button>
            <p>{isVis && "Here are some details to see"}</p>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

renderStuff(); */