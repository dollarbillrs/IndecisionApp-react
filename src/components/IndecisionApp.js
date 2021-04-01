import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options: this.props.options,
        selectedOption: undefined
    };
    
    handleOkClick = () => {
        this.setState(() => ({selectedOption: undefined}));
    };
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({selectedOption: option}));
    };
    handleDeleteOptions = () => {
        this.setState(() => ({options: [] }));
    };
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    };
    handleAddOption = (option) => {
        if (!option.trim()){
            return 'Enter a valid option';
        } else if (this.state.options.indexOf(option) > -1){
            return 'This option already exists';
        }
        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    };
  
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
    
    render() {
        const subtitle = "Put your life in the hands of a computer";
        return (
            <div>
                <Header subtitle={subtitle}/>
                <div className="container">
                    <Action 
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options 
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption 
                            handleAddOption={this.handleAddOption}
                        />       
                    </div>
                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleOkClick={this.handleOkClick}
                />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
}
