import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1, title: "learning redux toolkit", content: "I have heard good things about redux toolkit in react"
    },
    {
    id: 2, title: "Slices..", content: "The more I say slice the more I learn them well!"
    }
];

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers:{
        postAdded(state,action){
            state.push(action.payload);
        }

    }

});

export  const {postAdded} = postsSlice.actions;

export const selectAllPosts = (state)=>state.posts;
export default postsSlice.reducer;