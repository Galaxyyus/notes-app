import { useEffect, useState } from 'react';

import CreateArea from './../CreateArea/CreateArea.jsx';
import NotesContainer from './../NotesContainer/NotesContainer.jsx';

import './Content.css';

function Content() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/notes")
            .then(res => res.json())
            .then(data => setNotes(data));
    }, []);

    async function addNote(note) {
        if (Object.values(note).every((value) => value === "")) {
            return;
        } else {
            const response = await fetch("http://localhost:3001/notes", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(note),
            });

            if (!response.ok) {
                alert('Failed to save the note!!');
                return;
            }

            // Parse the saved note returned by the server (includes _id)
            const savedNoteId = await response.json();

            const newNote = { _id: savedNoteId, ...note };

            setNotes((prev) => [...prev, newNote]);
            return true;
        }
    }

    async function deleteNote(id) {
        await fetch(`http://localhost:3001/notes/${id}`, {
            method: "DELETE"
        });

        setNotes((prev) => prev.filter((note) => note._id !== id));
    }

    return (
        <div id='content'>
            <CreateArea addNote={addNote} />
            <NotesContainer notes={notes} deleteNote={deleteNote} />
        </div>
    );
}

export default Content;