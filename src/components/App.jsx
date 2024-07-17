import { Route, Routes } from "react-router-dom";
import { ApiContext, useApiContext } from "./Context/ApiContext";
import CreatePost from "./CreatePost/CreatePost";
import Select from "./Select/Select";
import { SelectContext, useSelectContext } from "./Context/SelectContext";
import ListPost from "./ListPost/ListPost";
import Header from "./Header/Header";
import Login from "./Login/Login";
import NotFound from "./NotFound/NotFound";
import AuthRoute from "./AuthRoute/AuthRoute";

function App() {
  const apiContext = useApiContext();
  const selectContext = useSelectContext();

  return (
    <>
      <Header />
      <ApiContext.Provider value={apiContext}>
        <SelectContext.Provider value={selectContext}> 
          <Routes>
          <Route path="/" element= {<Login/>}/>
            <Route
              path="/ListPost"
              element={
              <AuthRoute 
              user={userData}
              component={<ListPost />}/>}/>
            <Route 
            path="/CreatePost" 
            element={
            <AuthRoute
            user={userData}
            component={<CreatePost />}/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </SelectContext.Provider>
      </ApiContext.Provider>
    </>
  );
}

export default App;
