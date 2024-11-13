
import Author from "./Author";
import ReactionButtons from "./ReactionButtons";
import TimeAgo from "./TimeAgo";

const PostsExcerpt = ({post}) => {
  return (
    <article >
        <h2>{post.title}</h2>
        <p>{post.body.substring(0,100)}</p>
        <TimeAgo timestamp={post.date} />
        <ReactionButtons post={post} />
        
        <Author  post={post}/>
    </article>
  )
}

export default PostsExcerpt