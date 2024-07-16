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
}

export default App;
