import Users from "./Users";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostsExcerpt = ({post}) => {
  return (
    <article>
        <h2>{post.title}</h2>
        <p>{post.body.substring(0,100)}</p>
        <ReactionButtons post={post}/>
        <TimeAgo  timestamp={post.date}/>
        <p>
          <Users userId={post.userId}/>
        </p>
    </article>
  )
}

export default PostsExcerpt