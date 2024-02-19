import { createSlice } from '@reduxjs/toolkit'

const initialState = {};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        updateUser: (state, action) => {
            const { _id, name, email, access_token, phone, password } = action.payload;
            console.log(action.payload);
            state.id = _id;
            state.name = name || email;
            state.email = email;
            state.phone = phone;
            state.pasword = password;
            state.access_token = access_token;
        },
        resetUser: (state) => {
            state.name = "";
            state.email = "";
            state.phone = "";
            state.pasword = "";
            state.access_token = "";
        }
    },
})

export const { updateUser, resetUser } = userSlice.actions
export default userSlice.reducer