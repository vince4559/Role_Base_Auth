import { createSlice } from "@reduxjs/toolkit";

createSlice
const authSlice = createSlice({
    name:'auth',
    initialState: {username:null, token:null},

    reducers:{
        setCredentials:(state, action) => {
            const {username, accessToken, roles} = action.payload;
            state.username = username;
            state.token = accessToken;
            state.roles = roles;
        },

        logOut:(state, action) => {
            state.username = null;
            state.token = null;
        },

    }
});


export const {setCredentials, logOut} = authSlice.actions;
export default authSlice.reducer;
export const selectCurrentUser = (state) => state.auth.username;
export const selectCurrentToken = (state) => state.auth.token;
export const roles = (state) => state.auth.roles;