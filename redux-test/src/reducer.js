import { createStore } from 'redux';

const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'ZERO':
            return 0;
        default:
            return state;
    }
};

const store = createStore(counterReducer);

store.subscribe(() => {
    const storeNow = store.getState();
    console.log('Current state:', storeNow);
});

// console.log(store.getState()); // 0

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
// console.log(store.getState()); // 3
store.dispatch({ type: 'ZERO' });
store.dispatch({ type: 'DECREMENT' });
// console.log(store.getState()); // -1
