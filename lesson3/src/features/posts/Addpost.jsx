import { useDispatch, useSelector } from "react-redux";
import {postAdded} from "./postsSlice";
import { selectAllUsers } from "./UsersSlice";

import { useState } from 'react'

const Addpost = () => {
 const dispatch = useDispatch();
const [title,setTitle] = useState("");
const [content,setContent] = useState("");
const users = useSelector(selectAllUsers);
const [userId, setUserId] = useState("");


const postCreators = users.map((creator)=> (
  <option key={creator.id} value={creator.id}>
    {creator.name}
  </option>
))

const canSave = Boolean(title) && Boolean(content);

const handleSubmit = (e)=>{
    e.preventDefault();
    dispatch(postAdded(title,content, userId))

    setContent("");
    setTitle("");

}
  return (
    <section>
        <form>
            <label htmlFor="postTitle">Title</label>
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} />
            <label htmlFor="Postcreator">
              <select  id="Postcreator" onChange={(e)=>setUserId(e.target.value)}>
                <option value=""></option>
                {postCreators}
              </select>
            </label>
            <label htmlFor="postContent"></label>
            <textarea name="" id="" value={content} onChange={(e)=>setContent(e.target.value)}></textarea>

            <button type="button" onClick={(e)=>handleSubmit(e)} disabled={!canSave}>Submit</button>
        </form>
    </section>

  )
}

export default Addpost