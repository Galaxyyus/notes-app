import { useState } from 'react';
import './CreateArea.css';

function CreateArea(props) {
    const [data, setData] = useState({ title: '', text: '' });

    function changeHandler(event) {
        const { name, value } = event.target;

        setData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    function clickHandler(event) {
        event.preventDefault();
        if (!data.title.trim() && !data.text.trim()) return;

        const newNote = {
            ...data,
            id: Date.now()
        };

        if (props.addNote(newNote)) {
            setData({ title: '', text: '' });
        }
    }

    return (
        <form className="create-note-card">
            <input
                name="title"
                id="note-title-input"
                placeholder="Title"
                value={data.title}
                onChange={changeHandler}
                autoComplete="off"
            />
            <textarea
                name="text"
                id="note-text-input"
                rows="3"
                placeholder="Take a note..."
                value={data.text}
                onChange={changeHandler}
            ></textarea>
            <button type="submit" onClick={clickHandler}>Add Note</button>
        </form>
    );
}

export default CreateArea;