import { useSelector } from "react-redux";
import { selectPostById } from "./PostsSlice";

import Author from "./Author";
import ReactionButtons from "./ReactionButtons";
import TimeAgo from "./TimeAgo";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


const SinglePostPost = () => {
    //retrieve postid

    const {postId} = useParams();

    const post = useSelector((state)=> selectPostById(state, Number(postId)));
    if(!post){
        return (
            <section>
                <h2>Post not found</h2>
            </section>
        )
    }

    return (
<article >
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <Link to={`/post/edit/${post.id}`}>Edit post</Link>
        <Author  post={post}/>
        <TimeAgo timestamp={post.date} />
        <ReactionButtons post={post} />
    </article>
    )
  
}

export default SinglePostPost