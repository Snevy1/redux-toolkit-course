import { useSelector} from "react-redux";
import { selectAllPosts,getPostsError,getPostsStatus } from "./PostsSlice";

import PostsExcerpt from "./PostsExcerpt";

export const PostsList = () => {
 

    const posts = useSelector(selectAllPosts);
    const postsStatus = useSelector(getPostsStatus);
    const error = useSelector(getPostsError);


    


    

    let content;

    if(postsStatus === "loading"){
      content = <p>Loading...</p>
    }else if(postsStatus === "succeeded"){
      const orderedPosts = posts.slice().sort((a,b)=> b.date.localeCompare(a.date));
      content = orderedPosts.map((post)=>( <PostsExcerpt post={post} key={ post.id} /> ))
    }else if (postsStatus === "failed") {
      content = <p>{error}</p>
    }

     

  
  return (
    <div >
      <p>posts</p>
        {content}
    </div>
  )
}
