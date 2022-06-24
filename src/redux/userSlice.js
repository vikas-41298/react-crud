import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { id: 1, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Craig', username: 'siliconeidolon' },
    { id: 3, name: 'Ben', username: 'benisphere' },
]

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        userAdded: (state, action) => {
            state.push(action.payload);
        },
        userUpdated(state, action) {
            const { id, name, username } = action.payload;
            const existingUser = state.find((user) => user.id === id);
            if (existingUser) {
                existingUser.name = name;
                existingUser.username = username;
            }
        },
        userDeleted(state, action) {
            const  id  = action.payload;
            const existingUser = state.find((user) => user.id === id);
            if (existingUser) {
              return state.filter((user) => user.id !== id);
            }
        },
    }
})


export const { userAdded,userUpdated,userDeleted } = userSlice.actions;
export default userSlice.reducer;