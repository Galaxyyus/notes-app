import { useState } from 'react';

function CreateArea(props) {
    const [data, setData] = useState({ title: '', text: '' });

    function changeHandler(event) {
        const { name, value } = event.target;

        setData(prev => {
            let newData = { ...prev };
            newData[name] = value;
            return newData;
        });
    }

    function clickHandler(event) {
        event.preventDefault();
        if (props.addNote(data)) {
            setData({ title: '', text: '' });
        }
    }

    return (
        <div>
            <textarea name="title-input" id="note-title-input" rows='2' placeholder='Note Title' value={data.title} onChange={changeHandler}></textarea>
            <textarea name="text-input" id="note-text-input" placeholder='Note Body' value={data.text} onChange={changeHandler}></textarea>
            <button onClick={clickHandler}>Add Note</button>
        </div>
    );
}

export default CreateArea;