
const addPost = (newPost, getPost) => {
    fetch("https://669156aa26c2a69f6e8f6d81.mockapi.io/diary", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPost),
  })

  .then((response) => response.json())
  .then((data) => getPost());
};



const deletePost = (id) => {
    return fetch(`https://669156aa26c2a69f6e8f6d81.mockapi.io/diary/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
 
  })

  .then((response) => response.json())

};

const editPost = (selectedPost, id) => {
  return fetch(`https://669156aa26c2a69f6e8f6d81.mockapi.io/diary/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(selectedPost),
})

.then((response) => response.json())

};

const getPostById = (id) => {
  return fetch(`https://669156aa26c2a69f6e8f6d81.mockapi.io/diary/${id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },

})

.then((response) => response.json())
};

export {addPost,deletePost, editPost, getPostById};