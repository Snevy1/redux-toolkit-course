import { useSelector } from "react-redux";
import { selectAllPosts } from "./PostsSlice";
import Author from "./Author";

export const PostsList = () => {
    const posts = useSelector(selectAllPosts);
    console.log(posts);
    const renderedPosts = posts.map((post)=>( <article key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <Author  post={post}/>
    </article>)

    )
  return (
    <div>
        {renderedPosts}
    </div>
  )
}
