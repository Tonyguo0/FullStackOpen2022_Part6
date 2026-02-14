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
        const content = event.target.note.value;
        event.target.note.value = ``;
        store.dispatch({
            type: 'NEW_NOTE',
            payload: {
                content,
                important: false,
                id: generateId()
            }
        });
    };

    const toggleImportanceOf = (id) => {
        store.dispatch({
            type: 'TOGGLE_IMPORTANCE',
            payload: { id }
        });
    };

    return (
        <div>
            <form onSubmit={addNote}>
                <input name="note" />
                <br />
                <button type="submit">add</button>
            </form>

            <ul>
                {store.getState().map((note) => (
                    <li
                        key={note.id}
                        onClick={() => toggleImportanceOf(note.id)}
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
