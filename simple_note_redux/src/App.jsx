import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { createNote, toggleImportanceOf } from './reducers/noteReducer';

const App = () => {
    // useDispatch is a hook that gives us access to the dispatch function of the Redux store,
    // which we can use to dispatch actions
    const dispatch = useDispatch();
    // useSelector is a hook that allows us to extract data from the Redux store state, it takes a function as an argument,
    // the function either searches for or selects the desired data from the Redux store state and returns it,
    // the returned data is stored in the notes variable
    // which is short hand for (state) => { return state; }
    // we could return only selected parts of the state,
    // for example return only the notes that are important with (state) => state.filter((n) => n.important);
    const notes = useSelector((state) => state);

    const addNote = (event) => {
        event.preventDefault();
        const content = event.target.note.value;
        event.target.note.value = '';
        dispatch(createNote(content));
    };

    const toggleImportance = (id) => {
        dispatch(toggleImportanceOf(id));
    };

    return (
        <div>
            <form onSubmit={addNote}>
                <input name="note" />
                <button type="submit">Add Note</button>
            </form>
            <ul>
                {notes.map((note) => (
                    <li key={note.id} onClick={() => toggleImportance(note.id)}>
                        {note.content}{' '}
                        <strong>{note.important ? 'important' : ''}</strong>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default App;
