import { createSlice, nanoid } from "@reduxjs/toolkit";

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
        postAdded: {
            reducer(state,action){
                state.push(action.payload);
            }, 

            prepare(title,content){
                return {
                    payload:{
                        id:nanoid(),
                        title,
                        content
                    }
                }
                

            }
    
        }

    }

});

export  const {postAdded} = postsSlice.actions;

export const selectAllPosts = (state)=>state.posts;
export default postsSlice.reducer;