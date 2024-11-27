import { useState } from "react";
import { addNewPost } from "./PostsSlice";
import { selectAllUsers } from "../users/UsersSlice"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

 export const AddPost = () => {

  const navigate = useNavigate()


 const [title, setTitle] = useState("");
 const [content,setContent] =  useState("")
const [userId, setUserId ] = useState("");
const [addRequestStatus, setRequestStatus] = useState('idle')
 const users = useSelector(selectAllUsers);

 const renderedUsers = users.map((user)=>(
    <option key={user.id} value={user.id}>{user.name}</option>
 ))

 const dispatch = useDispatch();

 const canSave = [title, content, userId].every(Boolean) && addRequestStatus === 'idle';

 const handleSubmit = (e)=>{
    e.preventDefault();

    if(canSave){
      try {
        setRequestStatus('pending')
        dispatch(addNewPost({title, body: content, userId})).unwrap();

         setContent("")
          setTitle("")
          setUserId("")
          navigate("/")
        
      } catch (error) {
        console.error('Failed to save the post', error)
        
      }finally{
        setRequestStatus('idle ')
      }
    }



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