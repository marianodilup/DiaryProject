import React, { useEffect } from "react";
import { useContext } from "react";
import { ApiContext } from "../Context/ApiContext";
import { Link, useParams } from "react-router-dom";
import "./Detail.scss"
import Header from "../Header/Header";


function Detail({userData, authData, setAuthData}) {
  const { postList } = useContext(ApiContext);
  const { idPost } = useParams();

  const findPost = postList.find((post) => post.id === idPost);

  useEffect(() => {
    if (authData) {
      getDataUserForAuth(userData.token).then((info) => {
        setAuthData(info);
      });
    }
  }, []);

  
  return (
    <>
    <Header />
    <div className="detail-container">
      <Link className="detail-link" to={"/ListPost"}>
      <button className="return-from-detail-btn">
        Volver a mi diario
        </button>
      </Link>
      <article className="diary-post-detail">
        <h2 className="detail-title">{findPost.title}</h2>
        <figure className="detail-figure">
        <img
          className="img-detail"
          src={findPost.img}
          alt={findPost.title}
        />
        </figure>
        <h3 className="detail-post">{findPost.post}</h3>
        <h4 className="detail-date">{findPost.date}</h4>
      </article>
    </div>
    </>
  );
}

export default Detail;
