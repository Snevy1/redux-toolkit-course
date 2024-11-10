import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: '1', name: "Nevily"
    },
    {
        id: '2', name: "Mercilline"
    }
];


 export const UsersSlice = createSlice({
    name:"users",
    initialState,
    reducers: {

    }
});

export const selectAllUsers = (state)=> state.users;

export default UsersSlice.reducer;