
import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/UsersSlice";

const Author = ({post}) => {

    const users = useSelector(selectAllUsers);
    const Author = users.find((author)=> author.id == post.userId);
    return (
        <span>by.. {Author ? Author.name: "UnkownAuthor"}</span>
    )

}

export default Author