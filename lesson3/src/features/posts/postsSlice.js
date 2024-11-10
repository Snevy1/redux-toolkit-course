import { createSlice, nanoid } from "@reduxjs/toolkit";
import {sub} from 'date-fns';

const initialState = [
    {
        id: '1', title:"React developer tools", content: "Here is a list of all the react developer tools that you need",
        date: sub(new Date(), {minutes:10 }).toISOString()
    },
    {
        id: '2', title:"Everything about tailwind css that you need to know", content: "Below are a list of important topics in tailwind css that you need to learn and make a living thanks",
        date: sub(new Date(), {minutes:10}).toISOString()
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
            prepare(title, content,userId){
               return  {
                payload: {
                    id:nanoid(),
                    title:title,
                    userId: userId,
                    date: new Date().toISOString(),
                    content: content
                }
               }

            }
        }

    }

  });

 export  const {postAdded} = postsSlice.actions;

  export const selectAllPosts = (state)=>state.posts;


  export default postsSlice.reducer;