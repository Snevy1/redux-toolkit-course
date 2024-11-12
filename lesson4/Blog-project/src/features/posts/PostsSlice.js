import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    posts: [
        {id: 1, title: "React Native", content: "Many of you arefamiliar with React Native mobile app development", reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }},
        {id: 2, title: "WordPress developer", content: "Many of you are familiar with Wordpress development for web app development", reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }},

    ],
    status : 'idle',
    error: null
}


const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {

        postAdded: {
            reducer(state,action){
                state.posts.push(action.payload);

            },

            prepare(title, content, userId){
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        userId
                    }

                }
                

            }
        },

        reactionAdded(state,action){

        }
    }
});

 export const selectAllPosts = (state)=> state.posts.posts;
 export const {postAdded} = postsSlice.actions;

export default postsSlice.reducer;