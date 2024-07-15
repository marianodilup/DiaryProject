import Post from "../ListPost/Post";
import { ApiContext } from "../Context/ApiContext";
import { useContext } from "react";

function ListPost() {
  const { postList } = useContext(ApiContext);

  return (
    <section>
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </section>
  );
}

export default ListPost;
