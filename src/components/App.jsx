import { Route, Routes } from "react-router-dom";
import { ApiContext, useApiContext } from "./Context/ApiContext";
import CreatePost from "./CreatePost/CreatePost";
import ListPost from "./ListPost/ListPost";

function App() {
  const apiContext = useApiContext();

  return (
    <ApiContext.Provider value={apiContext}>
      <CreatePost />
      <ListPost />
      <Routes>
        <Route path="/ListPost" element={<ListPost />} />
      </Routes>
    </ApiContext.Provider>
  );
}

export default App;
