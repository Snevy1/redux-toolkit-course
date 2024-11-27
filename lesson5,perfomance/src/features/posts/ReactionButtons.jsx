import { useDispatch } from "react-redux";
import { reactionAdded } from "./PostsSlice";




const reactionEmoji = {
    thumbsUp: '👍',
    wow: '😲',
    heart: '❤',
    rocket:'🚀',
    coffee: '☕'
}

const ReactionButtons = ({post}) => {
  const dispatch = useDispatch()
  const reactions = Object.entries(reactionEmoji);
 const renderedReactions =  reactions.map(([name, emoji])=>{
    return(
      <button key={name} onClick={()=>dispatch(reactionAdded({postId: post.id, reaction: name}))}>{emoji} {post.reactions[name]}</button>

    ) 
  })
  return (
    <div>
      {renderedReactions}
    </div>
      
  
  )
}

export default ReactionButtons