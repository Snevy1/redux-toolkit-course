import { useState } from "react";
import { postAdded } from "./postsSlice";
import { useDispatch,useSelector } from "react-redux";
import { selectAllUsers } from "./UsersSlice";

const AddPost = () => {

const [title,setTitle]=useState("");
const [content,setContent] = useState("");
const [userId, setUserId] = useState('');
const users = useSelector(selectAllUsers);

const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

const postCreators = users.map((user)=>(
    <option key={user.id} value={user.id}>
        {user.name}
    </option>
))


const dispatch = useDispatch();
  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(userId);

    if(title && content){
        dispatch(postAdded(title, content,userId));

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
            <label htmlFor="postAuthor">
                <select id="postAuthor" value={userId} onChange={(e)=>setUserId(e.target.value)}>
                    <option value=""></option>
                    {postCreators}


                </select>
            </label>
            <textarea type="text" id="postContent" placeholder="add content" value={content} onChange={(e)=>setContent(e.target.value)} />
            <button type="submit" onClick={(e)=>handleSubmit(e)} disabled={!canSave}>Submit</button>

          </form>

        </div>
  )
}

export default AddPost;