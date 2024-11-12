import { useState } from "react";
import { postAdded } from "./PostsSlice";
import { selectAllUsers } from "./UsersSlice";
import { useDispatch, useSelector } from "react-redux";

 export const AddPost = () => {
 const [title, setTitle] = useState("");
 const [content,setContent] =  useState("")
const [userId, setUserId ] = useState("")
 const users = useSelector(selectAllUsers);

 const renderedUsers = users.map((user)=>(
    <option key={user.id} value={user.id}>{user.name}</option>
 ))

 const dispatch = useDispatch();

 const canSave = [title, content, userId].every(Boolean);

 const handleSubmit = (e)=>{
    e.preventDefault();

    dispatch(postAdded(title, content, userId));

    setContent("")
    setTitle("")
    setUserId("")



 }


  return (
    <div>
        <form>
            <label htmlFor="postTitle">Title</label>
            <input type="text" placeholder="input Title" value={title}  onChange={(e)=>setTitle(e.target.value)} />
            <select name="" id="PostUser" value={userId} onChange={(e)=>setUserId(e.target.value)}>
                <option value=""></option>
                {renderedUsers}
            </select>
            <label htmlFor="postContent">Content</label>
            <textarea name="" id="postContent" value={content} onChange={(e)=>setContent(e.target.value)}></textarea>

            <button  type="button" onClick={(e)=> handleSubmit(e)} disabled={!canSave}>Submit</button>
        </form>
    </div>
  )
}

export default AddPost