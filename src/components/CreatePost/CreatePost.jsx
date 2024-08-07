import React, { useEffect, useState } from "react";
import "./CreatePost.scss";
import { ApiContext } from "../Context/ApiContext";
import { useContext } from "react";
import { addPost } from "../Services/ApiCrud";
import { getDataUserForAuth } from "../Services/UserApi";
import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";

function CreatePost({ userData, setAuthData }) {
  const { getPost } = useContext(ApiContext);
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
    });
  }, []);

  const handleInput = (ev) => {
    ev.preventDefault();
    const id = ev.target.id;
    const value = ev.target.value;
    setPost({ ...post, [id]: value });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    addPost(post, getPost);

    setPost({
      title: "",
      post: "",
      date: "",
      img: "",
    });
    navigate("/ListPost")
  };
  return (
    <>
      <Header />
      <div className="create-post-container">
        <fieldset>
          <form action="" onSubmit={handleSubmit}>
            <h2>Crea una nueva entrada para tu diario</h2>
            <label htmlFor="date">Fecha: </label>
            <input type="date" id="date" onChange={handleInput} />
            <label htmlFor="title">Título: </label>
            <input
              type="text"
              id="title"
              placeholder="Mi primer amor"
              onChange={handleInput}
            />
            <label htmlFor="post">Post: </label>
            <textarea
              name="post"
              id="post"
              cols="30"
              rows="10"
              onChange={handleInput}
            ></textarea>

            <label htmlFor="img">URL de imagen: </label>
            <input type="text" id="img" alt="" onChange={handleInput} />
            <button type="submit">Crear nueva entrada</button>
          </form>
        </fieldset>
      </div>
    </>
  );
}

export default CreatePost;
