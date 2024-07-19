import "./Post.scss";
import { ApiContext } from "../Context/ApiContext";
import { useContext } from "react";
<<<<<<< HEAD
import { deletePost, editPost } from "../Services/ApiCrud";
import { useNavigate } from "react-router-dom";
=======
import { deletePost } from "../Services/ApiCrud";
import { Link } from "react-router-dom";
>>>>>>> detail


function Post({ post }) {
  const {getPost, setEditId} = useContext(ApiContext);
  const navigate = useNavigate();

  const handleDelete = (ev)=>{
    const id = ev.target.id;
    deletePost(id).then((data) => {
      getPost()  });
  };

  const handleEdit = (ev)=>{
    const id = ev.target.id;
    setEditId(id);
    editPost(id)
    navigate("/EditPost");
  };


  return (
    <article className="diary-post">
<<<<<<< HEAD
      <button className="button-post" onClick={handleDelete} id={post.id}>Eliminar</button>
      <button className="button-post" onClick={handleEdit} id={post.id}>Editar</button>
=======
      <button className="button-post" onClick={handleClick} id={post.id}>Eliminar</button>
      <Link className="link-post" to={`/detail/${post.id}`}>
>>>>>>> detail
      <h3>{post.title}</h3>
      <h4>{post.post}</h4>
      <h4>{post.date}</h4>
      <img className="img-post" src={post.img} alt="" width={300} height={300} />
      </Link>
    </article>
  );
}

export default Post;
