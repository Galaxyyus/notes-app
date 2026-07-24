function CreateArea(props) {
    return (
        <div>
            <textarea name="title-input" id="note-title-input" rows='2' placeholder='Note Title'></textarea>
            <textarea name="text-input" id="note-text-input" placeholder='Note Body'></textarea>
        </div>
    );
}

export default CreateArea;