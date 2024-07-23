import React, { useEffect, useState } from "react";
import { ApiContext } from "../Context/ApiContext";
import { useContext } from "react";
import { getDataUserForAuth } from "../Services/UserApi"; 
import { getPostById } from "../Services/ApiCrud";
import { editPost } from "../Services/ApiCrud";
import { useNavigate } from "react-router-dom";

function EditPost({userData, setAuthData }) {

    const { getPost, editId } = useContext(ApiContext);
    const [post, setPost] = useState({
      title: "",
      post: "",
      date: "",
      img: "",
    });
    const navigate = useNavigate();
  
     useEffect(() => {
      getDataUserForAuth(userData.token).then((info) => {
        setAuthData(info);
      })
      console.log(post);
    }, [post]); 

    const getEditPost = async () => {
        if (editId) {
            const response = await getPostById(editId);
            setPost({
                title: response.title,
                post: response.post,
                date: response.date,
                img: response.img,
            });   
    }};

    useEffect(() => {
        getEditPost();
    }, []);
  
    const handleInput = (ev) => {
      ev.preventDefault();
      const id = ev.target.id;
      const value = ev.target.value;
      setPost({ ...post, [id]: value });
    };
  
    const handleSubmit = (ev) => {
      ev.preventDefault();
      editPost(post, editId).then((data) => {
        getPost()  });
      navigate("/ListPost");
    };


  return (
    
    <form action="" onSubmit={handleSubmit}>
      <fieldset>
      <label htmlFor="date">Fecha: </label>
      <input value={post.date} type="date" id="date" onChange={handleInput} />
      </fieldset>
      <fieldset>
      <label htmlFor="title">Título: </label>
      <input
        value={post.title}
        type="text"
        id="title"
        onChange={handleInput}
      />
      </fieldset>
      <fieldset>
      <label htmlFor="post">Post: </label>
      <textarea
        value={post.post}
        name="post"
        id="post"
        cols="30"
        rows="10"
        onChange={handleInput}
      ></textarea>
      </fieldset>
        <fieldset>
      <label htmlFor="img">imágen: </label>
      <input value={post.img} type="text" id="img" alt="" onChange={handleInput} />
      </fieldset>
      <button type="submit">Actualizar</button>
    </form>
  )
}

export default EditPost