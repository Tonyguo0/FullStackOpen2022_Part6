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
- [ ] Forwarding Redux Store to various components

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

- The `deepFreeze` function is used to ensure that the state object is not mutated during the tests. It recursively freezes the object and all of its nested properties, making it immutable. This helps to catch any accidental mutations in the reducer function, as any attempt to modify the frozen state will throw an error.