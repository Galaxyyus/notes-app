import { useState } from 'react';
import './CreateArea.css';

function CreateArea(props) {
    const [data, setData] = useState({ title: '', text: '' });

    function changeHandler(event) {
        let { name, value } = event.target;

        setData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    function clickHandler(event) {
        event.preventDefault();
        if (!data.title && !data.text) return;

        if (props.addNote(data)) {
            setData({ title: '', text: '' });
        }
    }

    return (
        <div id="input-div">
            <input
                name="title"
                id="title-input"
                placeholder="Title"
                value={data.title}
                onChange={changeHandler}
                autoComplete="off"
            />
            <hr />
            <textarea
                name="text"
                id="text-input"
                rows="3"
                placeholder="Take a note..."
                value={data.text}
                onChange={changeHandler}
            />
            <button onClick={clickHandler}>Add Note</button>
        </div>
    );
}

export default CreateArea;