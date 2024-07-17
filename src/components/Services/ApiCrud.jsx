
const addPost = (newPost) => {
    fetch("https://669156aa26c2a69f6e8f6d81.mockapi.io/diary", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
  })

  .then((response) => response.json())
  .then((data) => setPostList([...postList, newPost]));
};



const deletePost = (id) => {
    return fetch(`https://669156aa26c2a69f6e8f6d81.mockapi.io/diary/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
 
  })

  .then((response) => response.json())
  
};

export {addPost,deletePost};