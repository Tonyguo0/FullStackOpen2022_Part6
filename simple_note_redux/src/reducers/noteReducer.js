const noteReducer = (state = [], action) => {
    switch (action.type) {
        case 'NEW_NOTE':
            // using concat to create a new array with the new note added
            // this way we avoid mutating the existing state array with array.push()
            // return state.concat(action.payload);

            // using spread operator to create a new array with the new note added
            return [...state, action.payload];
        case 'TOGGLE_IMPORTANCE': {
            const id = action.payload.id;
            // search for specific note object, the importance of which we want to toggle
            const noteToChange = state.find((n) => n.id === id);
            // create a new object, a copy of the original note, the value of the important field has been changed to the 
            // opposite of the original value
            const changedNote = {
                ...noteToChange,
                important: !noteToChange.important
            };
            // a new state returned, we create it by taking all the notes from the old state except for the desired note
            // which we replace with its lightly altered copy 
            return state.map((note) => (note.id !== id ? note : changedNote));
        }
        default:
            return state;
    }
};

export default noteReducer;
