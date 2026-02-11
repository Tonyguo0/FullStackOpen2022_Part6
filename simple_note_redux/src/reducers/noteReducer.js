const noteReducer = (state = [], action) => {
    switch (action.type) {
        case 'NEW_NOTE':
            // using concat to create a new array with the new note added
            // this way we avoid mutating the existing state array with array.push()
            return state.concat(action.payload);
        case 'TOGGLE_IMPORTANCE':
            return state.concat(action.payload);
        default:
            return state;
    }
};

export default noteReducer;
