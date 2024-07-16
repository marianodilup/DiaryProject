import "./Post.scss";

function Post({ post }) {
  return (
    <article className="diary-post">
      <h3>{post.title}</h3>
      <h4>{post.post}</h4>
      <h4>{post.date}</h4>
      <img src={post.img} alt="" width={300} height={300} />
    </article>
  );
}

export default Post;
