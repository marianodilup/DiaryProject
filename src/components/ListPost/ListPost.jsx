import Post from "../ListPost/Post";
import { ApiContext } from "../Context/ApiContext";
import { useContext } from "react";
import { SelectContext } from "../Context/SelectContext";
import Select from "../Select/Select";


function ListPost({ }) {
  const { postList } = useContext(ApiContext);
  const { date, month, year } = useContext(SelectContext);



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
