<<<<<<< HEAD
import { Route, Routes } from "react-router-dom";
import { ApiContext, useApiContext } from "./Context/ApiContext";
import CreatePost from "./CreatePost/CreatePost";
import NotFound from "./NotFound/NotFound";
import Header from "./Header/Header";
import Login from "./Login/Login";

function App() {
  const apiContext = useApiContext();

  return (
    <>
      <Header />
      <ApiContext.Provider value={apiContext}>
        <Routes>
        <Route path="/" element={<Login/>} />
          <Route path="/CreatePost" element={<CreatePost />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ApiContext.Provider>
    </>
  );
=======
import { Routes } from "react-router-dom"
import { ApiContext, useApiContext, } from "./Context/ApiContext"
import CreatePost from "./CreatePost/CreatePost"
import Select from "./Select/Select"
import { SelectContext, useSelectContext } from "./Context/SelectContext";


function App() {
  const apiContext = useApiContext();
  const selectContext = useSelectContext();

  return (
    <>
    
< ApiContext.Provider value={apiContext}>
  <SelectContext.Provider value={selectContext}>
<CreatePost/>
  <Select />
<Routes>


</Routes>
</SelectContext.Provider>
</ApiContext.Provider>
</>

  )
>>>>>>> d7016280331bc6fb28120d87435ef7a2da79ef85
}

export default App;
