import './App.css';

interface text {
    label: String;
    change: (value: string) => void;
}

function TextBox(props: text) {
    return (
        <div className="TextBox">
            <label>{props.label}:</label>
            <input type={'text'} onChange={event => props.change(event.target.value)}/>
        </div>
    );
}

export default TextBox;
