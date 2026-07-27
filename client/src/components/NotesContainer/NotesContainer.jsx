import Note from './../Note/Note.jsx';

import './NotesContainer.css';

function NotesContainer(props) {
    return (
        <div class="notes-container">
            {props.notes.map(note =>
                <Note
                    key={note.id}
                    id={note.id}
                    title={note.title}
                    text={note.text}
                    deleteNode={props.deleteNode}
                />)}
        </div>
    );
}

export default NotesContainer;