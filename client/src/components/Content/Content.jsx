import { useState } from 'react';

import CreateArea from './../CreateArea/CreateArea.jsx';
import NotesContainer from './../NotesContainer/NotesContainer.jsx';

import './Content.css';

function Content() {
    const [notes, setNotes] = useState([]);

    function addNote(note) {
        // Just append the new node to the notes array
        setNotes(prev => [...prev, note]);
        return true;
    }

    function deleteNote(id) {
        // Filter out the note with the given id
        setNotes(prev => prev.filter(note => note.id !== id));
    }

    return (
        <div id='content'>
            <CreateArea addNote={addNote} />
            <NotesContainer notes={notes} deleteNode={deleteNote} />
        </div>
    );
}

export default Content;