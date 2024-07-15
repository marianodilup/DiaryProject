import { createContext, useEffect, useState } from "react";

export const ApiContext = createContext(); // nombre contexto

export const useApiContext = () => {
  const [postList, setPostList] = useState({});
  useEffect(() => {
    fetch("https://669156aa26c2a69f6e8f6d81.mockapi.io/diary")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPostList(data);
      });
  }, []); // va a ejecutar una sola vez, cuando cargue la página.

  return { postList }; // aqui se ponen todas las variables que quieres pasar a otros componentes.
};
