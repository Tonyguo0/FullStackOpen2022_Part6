import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createStore } from 'redux';
import noteReducer from './reducers/noteReducer';

const store = createStore(noteReducer);

store.dispatch({
    type: 'NEW_NOTE',
    payload: {
        content: `the app state is in redux store`,
        important: true,
        id: 1
    }
});

store.dispatch({
    type: 'NEW_NOTE',
    payload: {
        content: `stage changes are made with actions`,
        important: true,
        id: 2
    }
});

const generateId = () => Number((Math.random() * 1000000).toFixed(0));

const App = () => {
    const addNote = (event) => {
        event.preventDefault();
        // content of new note is obtained directly from the form input field,
        // which is accessed through event.target.note.value, where note is the name of the input field
        const content = event.target.note.value;
        event.target.note.value = ``;
        // dispatch the action for adding notes
        store.dispatch(createNote(content));
    };

    // action creator for creating an action for adding a new note, it is used in the addNote function
    const createNote = (content) => {
        return {
            type: `NEW_NOTE`,
            payload: {
                content,
                important: false,
                id: generateId()
            }
        };
    };

    // action creator for creating an action for toggling the importance of a note,
    // it is used in the onClick handler of each note
    const toggleImportanceOf = (id) => {
        return {
            type: 'TOGGLE_IMPORTANCE',
            payload: {
                id
            }
        };
    };

    // note's importance can be changed by clicking its name
    const toggleImportance = (id) => {
        store.dispatch(toggleImportanceOf(id));
    };
    return (
        <div>
            <form onSubmit={addNote}>
                {/* input field must have a name in order to access its value */}
                <input name="note" />
                <br />
                <button type="submit">add</button>
            </form>

            <ul>
                {store.getState().map((note) => (
                    <li
                        key={note.id}
                        onClick={() => toggleImportance(note.id)}
                    >
                        {note.content}{' '}
                        <strong>{note.important ? 'important' : ''}</strong>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const root = createRoot(document.getElementById('root'));

const renderApp = () => {
    root.render(
        <StrictMode>
            <App />
        </StrictMode>
    );
};

renderApp();
store.subscribe(renderApp);

// createRoot(document.getElementById('root')).render(
//     <StrictMode>
//         <App />
//     </StrictMode>
// );
