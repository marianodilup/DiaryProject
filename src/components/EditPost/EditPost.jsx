import React, { useEffect, useState } from "react";
import { ApiContext } from "../Context/ApiContext";
import { useContext } from "react";
import { getDataUserForAuth } from "../Services/UserApi";
import { getPostById } from "../Services/ApiCrud";
import { editPost } from "../Services/ApiCrud";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import "./EditPost.scss";

function EditPost({ userData, authData, setAuthData }) {
  const { getPost, editId } = useContext(ApiContext);
  const [post, setPost] = useState({
    title: "",
    post: "",
    date: "",
    img: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (authData) {
      getDataUserForAuth(userData.token).then((info) => {
        setAuthData(info);
      });
      console.log(post);
    }
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
    }
  };

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
      getPost();
    });
    navigate("/ListPost");
  };

  return (
    <>
      <Header />

      <form className="EditPost" action="" onSubmit={handleSubmit}>
        <fieldset className="fieldset-edit">
          <label className="label-edit" htmlFor="date">
            Fecha:{" "}
          </label>
          <input
            value={post.date}
            type="date"
            id="date"
            onChange={handleInput}
          />

          <label className="label-edit" htmlFor="title">
            Título:{" "}
          </label>
          <input
            value={post.title}
            type="text"
            id="title"
            onChange={handleInput}
          />

          <label className="label-edit" htmlFor="post">
            Post:{" "}
          </label>
          <textarea
            value={post.post}
            name="post"
            id="post"
            cols="30"
            rows="10"
            onChange={handleInput}
          ></textarea>

          <label className="label-edit" htmlFor="img">
            imágen:{" "}
          </label>
          <input
            value={post.img}
            type="text"
            id="img"
            alt=""
            onChange={handleInput}
          />

          <button className="button-edit" type="submit">
            Actualizar
          </button>
        </fieldset>
      </form>
    </>
  );
}

export default EditPost;
