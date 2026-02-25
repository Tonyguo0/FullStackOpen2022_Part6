import { useDispatch, useSelector } from 'react-redux';
import { toggleImportanceOf } from '../reducers/noteReducer';


// Note responsible for rendering a single note
// is not aware of the Redux store, so we have to pass the dispatch function 
// to it as a prop in order to be able to dispatch actions from it
// these kinds of components are called presentational components, 
// they are not aware of the Redux store and they receive all the data and functions 
// they need as props from their parent component
const Note = ({ note, handleClick }) => {
    return (
        <li onClick={handleClick}>
            {note.content}
            <strong>{note.important ? 'important' : ''}</strong>
        </li>
    );
};


/**
 * Container component, contains some application logic,
 * defines what the event handlers of the Note components do and coordinates the configuration
 * of the Note/presentational components, it is aware of the Redux store and can dispatch actions to it and read data from it
 * @returns 
 */
const Notes = () => {

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


    return (
        <ul>
            {notes.map((note) => (
                <Note
                    key={note.id}
                    note={note}
                    handleClick={() => dispatch(toggleImportanceOf(note.id))}
                />
            ))}
        </ul>
    );
};

export default Notes;