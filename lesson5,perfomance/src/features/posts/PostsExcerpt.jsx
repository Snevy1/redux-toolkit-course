
import Author from "./Author";
import ReactionButtons from "./ReactionButtons";
import TimeAgo from "./TimeAgo";
import { Link } from "react-router-dom";

const PostsExcerpt = ({post}) => {
  return (
    <article >
        <h2>{post.title}</h2>
        <p>{post.body.substring(0,75)}...</p>
        <div className="postCredit">
          <Link to={`post/${post.id}`}>View Post</Link>
        <TimeAgo timestamp={post.date} />
        <ReactionButtons post={post} />
        
        <Author  post={post}/>

        </div>
       
    </article>
  )
}

export default PostsExcerpt