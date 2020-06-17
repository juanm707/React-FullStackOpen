import React, { useState, useEffect } from 'react';
import Note from './components/Note';
import noteService from './services/notes';

const App = (props) => {
    const [notes, setNotes] = useState([]);
    const [newNote, setNewNote] = useState('a new note...');
    const [showAll, setShowAll] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
       noteService
           .getAll()
           .then(initialNotes => {
               setNotes(initialNotes);
           });
    }, []);

    // const hook = () => {
    //     console.log('effect');
    //     axios
    //         .get('http://localhost:3001/notes')
    //         .then(response => {
    //             console.log('promise fulfilled');
    //             setNotes(response.data);
    //         });
    // };
    //
    // useEffect(hook, []);

    console.log('render', notes.length, 'notes');

    const handleNoteChange = (event) => {
        console.log(event.target.value);
        setNewNote(event.target.value);
    }

    // event handler
    const addNote = (event) => {
        event.preventDefault();
        //console.log('button clicked', event.target);
        const noteObject = {
            content: newNote,
            date: new Date().toISOString(),
            important: Math.random() < 0.5,
            id:  notes.length + 1,
        }

        // // setNotes(notes.concat(noteObject));
        // // setNewNote('');
        //
        // axios
        //     .post('http://localhost:3001/notes', noteObject)
        //     .then(response => {
        //         setNotes(notes.concat(response.data));
        //         setNewNote('');
        //     });

        noteService
            .create(noteObject)
            .then(returnedNote => {
                setNotes(notes.concat(returnedNote));
                setNewNote('');
            })
    }

    const toggleImportance = (id) => {
        //console.log('importance of', id, 'needs to be toggled');
        const note = notes.find(n => n.id === id);
        const changeNote = {...note, important: !note.important};

        noteService
            .update(id, changeNote)
            .then(returnedNote => {
                setNotes(notes.map(note => note.id !== id ? note : returnedNote));
            })
            .catch(error => {
                //alert(`the note ${note.content} was already deleted from server`);
                setError(`the note '${note.content}' was already deleted from server`);
                setNotes(notes.filter(n => n.id !== id));
            })
    }

    const notesToShow = showAll ? notes : notes.filter(note => note.important);

    return (
        <div>
            {error ? (<><p style={{color: 'red'}}>{error}</p><button onClick={() => setError('')}>hide error</button></>) : <p></p>}
            <h1>Notes</h1>
            <div>
                <button onClick={() => setShowAll(!showAll)}>
                    show {showAll ? 'important' : 'all'}
                </button>
            </div>
            <ul>
                {notesToShow.map(note =>
                    <Note key={note.id}
                          note={note}
                          toggleImportance={() => toggleImportance(note.id)}
                    />
                )}
            </ul>
            <form onSubmit={addNote}>
                <input value={newNote} onChange={handleNoteChange}/>
                <button type="submit">Save</button>
            </form>
        </div>
    );
}

export default App;
