import {  useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import Postauthor from "./Postauthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
   // This is to order posts with the most recent being at the top

  const orderedPosts = posts.slice().sort((a,b)=>b.date.localeCompare(a.date));

 

  const renderedPosts = orderedPosts.map((post)=>(
    <article key={post.id}>
    <h2>{post.title}</h2>
    <p>{post.content.substring(0,100)}</p>
    <p>
    <Postauthor userId={post.userId} />
    <TimeAgo  timestamp={post.date}/>
    </p>
    <ReactionButtons post={post} />
    </article>
  ));

  return (
    <section>
        <h2>Posts</h2>
        {renderedPosts}
    </section>
  )
}

export default PostsList