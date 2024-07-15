import Post from "./Post";
import { ApiContext } from "./Context/apiContext";

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
