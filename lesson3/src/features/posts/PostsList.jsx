import { useSelector } from "react-redux"
import { selectAllPosts } from "./postsSlice";
import Users from "./Users";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);
  const renderedPosts = posts.map((post)=>
    <article key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <p>{post.date}</p>
        <p>
          <Users userId={post.userId}/>
        </p>
    </article>
  )
  return (
    <section>
        <h2>Posts</h2>
        {renderedPosts}
    </section>
    
  )
}

export default PostsList