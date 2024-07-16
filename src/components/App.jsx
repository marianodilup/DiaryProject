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
}

export default App;
