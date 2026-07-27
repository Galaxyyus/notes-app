import Note from './../Note/Note.jsx';

import './NotesContainer.css';

function NotesContainer(props) {
    return (
        <div className="notes-container">
            {props.notes.map(note =>
                <Note
                    key={note._id}
                    id={note._id}
                    title={note.title}
                    text={note.text}
                    deleteNote={props.deleteNote}
                />)}
        </div>
    );
}

export default NotesContainer;