import { Routes } from "react-router-dom"
import { ApiContext, useApiContext, } from "./Context/apiContext"

function App() {
  const apiContext = useApiContext()

  return (
< ApiContext.Provider value={apiContext}>
<Routes>


</Routes>
</ApiContext.Provider>


  )
}

export default App
