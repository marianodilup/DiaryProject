import "./Post.scss";
import { ApiContext } from "../Context/ApiContext";
import { useContext } from "react";
import { deletePost } from "../Services/ApiCrud";


function Post({ post }) {
  const {getPost} = useContext(ApiContext);

  const handleClick = (ev)=>{
    const id = ev.target.id;
    deletePost(id).then((data) => {
      getPost()  });;
  };


  return (
    <article className="diary-post">
      <button onClick={handleClick} id={post.id}>Eliminar</button>
      <h3>{post.title}</h3>
      <h4>{post.post}</h4>
      <h4>{post.date}</h4>
      <img src={post.img} alt="" width={300} height={300} />
    </article>
  );
}

export default Post;
