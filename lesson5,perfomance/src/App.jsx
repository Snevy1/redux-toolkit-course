import { PostsList } from "./features/posts/postsList";
import AddPost from "./features/posts/AddPost";
import SinglePostPost from "./features/posts/SinglePostPost";
import EditPostForm from "./features/posts/EditPost";
import { Layout } from "./components/Layout";
import {Routes,Route} from "react-router-dom";





function App() {

  return (


    <Routes>
       <Route path="/"  element={<Layout />}>
       <Route index element={<PostsList />} />
      <Route path="post">
        <Route index element={<AddPost />} />
        <Route path=":postId" element={<SinglePostPost />} />
        <Route path="edit/:postId" element={<EditPostForm />}/>
      </Route>

       </Route>


      
    </Routes>  

  
  )
}

export default App
