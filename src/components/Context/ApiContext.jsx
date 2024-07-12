import { createContext, useEffect, useState } from "react";

export const ApiContext = createContext(); // nombre contexto

export const useApiContext = ()=>{ // nombre hook personalizado
const [postList, setPostList]= useState({});
useEffect(() => {
    fetch("https://669156aa26c2a69f6e8f6d81.mockapi.io/diary")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPostList(data);
      });
    }, []); // va a ejecutar una sola vez, cuando cargue la página.

    const addPost = (newPost) => {
        fetch("https://669156aa26c2a69f6e8f6d81.mockapi.io/diary", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newPost),
       
  
      })
    
      .then((response) => response.json())
      .then((data) => setPostList([...postList, newPost]));
    };
    
    
      return { postList, addPost }; // aqui se ponen todas las variables que quieres pasar a otros componentes.
    };
