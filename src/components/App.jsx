import { Routes } from "react-router-dom"
import { ApiContext, useApiContext, } from "./Context/ApiContext"
import CreatePost from "./CreatePost/CreatePost"


function App() {
  const apiContext = useApiContext()

  return (
    <>
    <CreatePost/>
< ApiContext.Provider value={apiContext}>
  <Select />
<Routes>


</Routes>
</ApiContext.Provider>
</>

  )
}

export default App
