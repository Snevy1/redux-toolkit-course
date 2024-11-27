import { useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { selectPostById, updatePost, deletePost } from "./PostsSlice";
import { selectAllUsers } from "../users/UsersSlice";
import { useSelector,useDispatch } from "react-redux";

const EditPostForm = ()=>{
    const {postId} = useParams()
    const navigate = useNavigate()

    const post = useSelector((state)=> selectPostById(state, Number(postId)))

    const users = useSelector(selectAllUsers)
    const [title,setTitle] = useState(post?.title)
    const [content,setContent] = useState(post?.body)
    const [userId, setUserId] = useState(post?.userId)
    const [requestStatus,setRequestStatus] = useState('idle')
    const dispatch =  useDispatch()

    
if(!post){
    return (
        <section>
            <h2>Post not found</h2>
        </section>
    )
}

const onTitleChanged = e => setTitle(e.target.value) 
const onContentChanged = e => setContent(e.target.value)
const onAuthotrChanged = e => setUserId(e.target.value)

const canSave = [title,content,userId].every(Boolean) && requestStatus === 'idle'



const onSavePostClicked = ()=>{
    if(canSave){
        try {
            setRequestStatus('pending')
            dispatch(updatePost({
                id: post.id, title, body: content, userId, reactions: post.reactions
            })).unwrap()

            setTitle('')
            setContent('')
            setUserId('')
            navigate(`/post/${post.id}`)



        } catch (error) {

            console.error('Failed to save the post')
            
        }finally{

            setRequestStatus('idle')

        }
    }

   


    
    
}

const onDeletePostClicked = ()=>{
    try {
        setRequestStatus('pending')
        dispatch(deletePost({id: post.id})).unwrap()
        setContent('')
        setTitle('')
        setUserId('')
        navigate("/")
    } catch (error) {
        console.error("Failed to delete the post", err)
        
    }finally{
        setRequestStatus('idle')
    }
}




const usersOptions = users.map(user=>(
    <option key={user.id} value={user.id}>
        {user.name}

    </option>
))




return (
    <section>
        <h2>Edit form</h2>
        <form>
            <label htmlFor="postTitle">Post Title:</label>
            <input type="text" id="postTitle" name="postTitle" value={title} onChange={onTitleChanged} />

            <label htmlFor="postAuthor"> Author</label>
            <select id="postAuthor" defaultValue={userId} onChange={onAuthotrChanged}>
                <option value=''></option>
                {usersOptions}

            </select>
            <label htmlFor="postContent">Content: </label>
            <textarea id="postContent" name="postContent" value={content} onChange={onContentChanged} />
            <button type="button"  onClick={onSavePostClicked} disabled={!canSave}>
                save Post

            </button>

            <button className="deleteButton" type="button" onClick={onDeletePostClicked}>
                     Delete Post

            </button>
        </form>
    </section>
)


}

export default EditPostForm;