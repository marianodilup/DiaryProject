import { createContext, useEffect, useState } from "react";

export const ApiContext = createContext();

export const useApiContext = () => {
  const [postList, setPostList] = useState([]); // Inicializar como array
  useEffect(() => {
    fetch("https://669156aa26c2a69f6e8f6d81.mockapi.io/diary")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPostList(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // se ejecuta una sola vez, cuandocarga la página.

  return { postList }; // aqui se ponen todas las variables que quieres pasar a otros componentes.
};
