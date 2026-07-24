import './Note.css';

function Note(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.text}</p>
            <button onClick={() => { props.deleteNote(props.id); }}>Delete</button>
        </div>
    );
}

export default Note;