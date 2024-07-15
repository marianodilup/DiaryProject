import { Routes } from "react-router-dom"
import { ApiContext, useApiContext, } from "./Context/apiContext"
import Select from "./Select/Select"

function App() {
  const apiContext = useApiContext()

  return (
< ApiContext.Provider value={apiContext}>
  <Select />
<Routes>


</Routes>
</ApiContext.Provider>


  )
}

export default App
