
class IndecisionApp extends React.Component {
    constructor(props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: props.options
        }
    }
    componentDidMount(){
        //console.log('component did mount');
        const json = localStorage.getItem("options");
        if (json){
            try {
                const options = JSON.parse(json);
                this.setState(() => ({ options }));
            } catch (err) {
                localStorage.removeItem('options');
            }
        }
    }
    componentDidUpdate(prevProps, prevState){
        // console.log('component updated');
        if (prevState.options.length !== this.state.options.length){
            localStorage.setItem("options", JSON.stringify(this.state.options));
        }
    }
    componentWillUnmount(){
        console.log('fires just before going away');
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }
    handleDeleteOptions() {
        this.setState(() => ({options: [] }));
    }
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }
    handleAddOption(option){
        if (!option.trim()){
            return 'Enter a valid option';
        } else if (this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    }
    render() {
        const subtitle = "Put you life in the hands of a computer";
        return (
            <div>
                <Header subtitle={subtitle}/>
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption}
                />        
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}

Header.defaultProps = {
    title: 'Indecision'
}

const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
                >
                What should I do?
            </button>
        </div>
    );
}

const Options = (props) => {
    return (
        <div>
            <p>There are {props.options.length} options</p>
            {props.options.length === 0 && <p>Please add an option to get started.</p>}
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {
                props.options.map((opt) => (
                    <Option 
                        key={opt} 
                        optionText={opt}
                        handleDeleteOption={props.handleDeleteOption}
                    />
                ))
            }
        </div>
    );
}

const Option = (props) => {
    return (
        <div>
            <p>{props.optionText}</p>
            <button 
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}>remove
            </button>
        </div>
    );
}

class AddOption extends React.Component {
    constructor(props){
        super(props);
        this.submitForm = this.submitForm.bind(this);
        this.state = {
            error: undefined
        };
    }
    submitForm(e){
        e.preventDefault(); 
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        
        this.setState(() => ({ error }));
        if (!error){
            e.target.elements.option.value = "";
        }
    }
    render() {
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.submitForm}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

const User = (props) => {
    return (
        <div>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    );
};

ReactDOM.render(<IndecisionApp options={['Play xBox', 'Take nap']} />, document.getElementById("app"));