# FullStackOpen2022_Part6

## 6a Flux-architecture and Redux
- [x] Flux-architecture
- [x] Redux
- [x] A note about the use of createStore
- [x] Redux-notes
- [ ] Pure functions, immutable


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