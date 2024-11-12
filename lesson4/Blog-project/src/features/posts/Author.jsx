
import { useSelector } from "react-redux";
import { selectAllUsers } from "./UsersSlice";

const Author = ({post}) => {
    console.log(post)

    const users = useSelector(selectAllUsers);
    const Author = users.find((author)=> author.id == post.userId);
    return (
        <span>by.. {Author ? Author.name: "UnkownAuthor"}</span>
    )

}

export default Author