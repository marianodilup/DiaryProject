import { createContext, useEffect, useState } from "react";

export const ApiContext = createContext();

export const useApiContext = () => {
  const [postList, setPostList] = useState([]); // Inicializar como array
  const [editId, setEditId] = useState("");

  const getPost = () => {
    fetch("https://669156aa26c2a69f6e8f6d81.mockapi.io/diary")
      .then((response) => response.json())
      .then((data) => {
        setPostList(data);
      });
  };
  useEffect(() => {
    getPost();
  }, []); // se ejecuta una sola vez, cuando carga la página.

  return { postList, getPost, editId, setEditId }; // aqui se ponen todas las variables que quieres pasar a otros componentes.
};
