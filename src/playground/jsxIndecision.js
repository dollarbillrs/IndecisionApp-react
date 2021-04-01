
const app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: []
};
// JSX - JavaScript XML
const onFormSubmit = (e) => {
    e.preventDefault(); 
    const option = e.target.elements.option.value;
    if (option){
        app.options.push(option);
    }
    e.target.elements.option.value = '';
    renderStuff();
};
const onRemoveOpts = () => {
    app.options = [];
    renderStuff();
};
const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};
const appRoot = document.getElementById('app');

const renderStuff = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>Dude! {app.subtitle}</p>}
            <p>You have {app.options.length > 0 ?  app.options.length + " options" : " no Options"}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision} >What should I do?</button>
            <button onClick={onRemoveOpts}>Clear Options</button>
            <ol>{
                app.options.map((opt) => {
                    return <li key={opt}>{opt}</li>
                })
            }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

renderStuff();
