# FullStackOpen2022_Part6

## 6a Flux-architecture and Redux
- [x] Flux-architecture
- [x] Redux
- [x] A note about the use of createStore
- [x] Redux-notes
- [x] Pure functions, immutable
- [x] Configuring the test environment
- [x] Tests for noteReducer
- [x] Array spread syntax
- [x] Uncontrolled form
- [x] Action creators
- [x] Forwarding Redux Store to various components
- [ ] More components

## Note
- The code is written into files ending with .js that are run by issuing the command `node name_of_file.js`

### 6a Redux-notes
- for redux the general convention is that actions have exactly two fields: type telling the type and payload containing the data included with the Action:
```typescript
    {
        type: 'NEW_NOTE',
        payload: {
            content: 'the app state is in redux store',
            important: true,
            id: 1
        }
    }
```

- The reducer function is a pure function that takes the current state and an action as arguments and returns a new state based on the action type. It should not mutate the existing state but instead return a new state object. In the example, we use `state.concat(action.payload)` to create a new array with the new note added, rather than using `array.push()` which would mutate the existing state array.

- The `deepFreeze` function from the `deep-freeze` library is used to ensure that the state object is not mutated during the tests. It recursively freezes the object and all of its nested properties, making it immutable. This helps to catch any accidental mutations in the reducer function, as any attempt to modify the frozen state will throw an error.

- use action creators to create actions. An action creator is a function that returns an action object. This helps to keep the code organized and makes it easier to manage the actions in the application. e.g.:
```javascript
const createNote = (content, important) => {
    return {
        type: 'NEW_NOTE',
        payload: {
            content,
            important,
            id: Math.random() * 1000000
        }
    }
}

const toggleImportanceOf = (id) => {
    return {
        type: 'TOGGLE_IMPORTANCE',
        payload: { id }
    }
}

store.dispatch(createNote('the app state is in redux store', true))
store.dispatch(createNote('state changes are made with actions', false))
store.dispatch(toggleImportanceOf(1))
```

- a module can have only one default export, but multiple "normal exports". The default export is imported without curly braces, while the normal exports are imported with curly braces. For example:
```javascript