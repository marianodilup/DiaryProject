import React from "react";
import { useContext } from "react";
import { ApiContext } from "../Context/ApiContext";
import { Link, useParams } from "react-router-dom";
import "./Detail.scss"

function Detail() {
  const { postList } = useContext(ApiContext);
  const { idPost } = useParams();

  const findPost = postList.find((post) => post.id === idPost);

  return (
    <div>
      <button className="link_button">
      <Link className="link" to={"/ListPost"}>
        Volver a mi diario
      </Link>
      </button>
      <article className="diary-post">
        <h2>{findPost.title}</h2>
        <h3>{findPost.post}</h3>
        <h4>{findPost.date}</h4>
        <img
          className="img-post"
          src={findPost.img}
          alt=""
          width={300}
          height={300}
        />
      </article>
    </div>
  );
}

export default Detail;
