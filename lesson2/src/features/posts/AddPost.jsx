import { useState } from "react";
import { postAdded } from "./postsSlice";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";

const AddPost = () => {

const [title,setTitle]=useState("");
const [content,setContent] = useState("");

const dispatch = useDispatch();
  const handleSubmit = (e)=>{
    e.preventDefault();

    if(title && content){
        dispatch(postAdded({
            id:nanoid(),
            title: title,
            content: content
        }));

        setTitle("");
        setContent("");
    }

  }



  return (
<div className="AddPost-container">
          <form>
            <label htmlFor="postTitle">Title</label>
            <input type="text" id= "postTitle" placeholder="add a title" value={title} onChange={(e)=>setTitle(e.target.value)} />
            <label htmlFor="postContent">Content</label>
            <textarea type="text" id="postContent" placeholder="add content" value={content} onChange={(e)=>setContent(e.target.value)} />
            <button type="submit" onClick={(e)=>handleSubmit(e)}>Submit</button>

          </form>

        </div>
  )
}

export default AddPost;