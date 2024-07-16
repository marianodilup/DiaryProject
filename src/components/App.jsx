import { Routes } from "react-router-dom"
import { ApiContext, useApiContext, } from "./Context/ApiContext"
import CreatePost from "./CreatePost/CreatePost"
import Select from "./Select/Select"


function App() {
  const apiContext = useApiContext();

  return (
    <>
    
< ApiContext.Provider value={apiContext}>
<CreatePost/>
  <Select />
<Routes>


</Routes>
</ApiContext.Provider>
</>

  )
}

export default App;
