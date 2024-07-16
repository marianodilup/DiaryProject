<<<<<<< HEAD
import { Routes } from "react-router-dom"
import { ApiContext, useApiContext, } from "./Context/ApiContext"
import CreatePost from "./CreatePost/CreatePost"
import Select from "./Select/Select"

=======
import { Route, Routes } from "react-router-dom";
import { ApiContext, useApiContext } from "./Context/ApiContext";
import CreatePost from "./CreatePost/CreatePost";
import ListPost from "./ListPost/ListPost";
>>>>>>> dev

function App() {
  const apiContext = useApiContext();

  return (
<<<<<<< HEAD
    <>
    
< ApiContext.Provider value={apiContext}>
<CreatePost/>
  <Select />
<Routes>


</Routes>
</ApiContext.Provider>
</>

  )
=======
    <ApiContext.Provider value={apiContext}>
      <CreatePost />
      <ListPost />
      <Routes>
        <Route path="/ListPost" element={<ListPost />} />
      </Routes>
    </ApiContext.Provider>
  );
>>>>>>> dev
}

export default App;
