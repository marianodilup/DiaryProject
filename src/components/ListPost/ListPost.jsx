import Post from "../ListPost/Post";
import { ApiContext } from "../Context/ApiContext";
import { useContext, useEffect } from "react";
import { SelectContext } from "../Context/SelectContext";
import Select from "../Select/Select";
import { getDataUserForAuth } from "../Services/UserApi";
import Header from "../Header/Header";

function ListPost({ userData, setAuthData, authData }) {
  const { postList } = useContext(ApiContext);
  const { date, month, year } = useContext(SelectContext);

  useEffect(() => {
    if (authData) {
      getDataUserForAuth(userData.token).then((info) => {
        setAuthData(info);
      });
    }
  }, []);

  const filteredPosts = postList
    .filter((post) => {
      if (date) {
        return post.date === date;
      } else {
        return true;
      }
    })
    .filter((post) => {
      if (month) {
        return post.date.includes(month);
      } else {
        return true;
      }
    })
    .filter((post) => {
      if (year) {
        return post.date.includes(year);
      } else {
        return true;
      }
    });

  return (
    <>
      <Header />
      <Select />
      <section>
        {filteredPosts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </section>
    </>
  );
}

export default ListPost;
