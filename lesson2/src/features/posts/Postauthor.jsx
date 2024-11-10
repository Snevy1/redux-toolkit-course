import { useSelector } from "react-redux";
import { selectAllUsers } from "./UsersSlice";

const Postauthor = (userId) => {
    const users = useSelector(selectAllUsers);
    const author = users.find(user=> user.id === Number(userId.userId) );
  return <span>by {author ? author.name: "unknown Author"}</span>
}

export default Postauthor