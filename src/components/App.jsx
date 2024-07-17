import { Route, Routes } from "react-router-dom";
import { ApiContext, useApiContext } from "./Context/ApiContext";
import CreatePost from "./CreatePost/CreatePost";
import { SelectContext, useSelectContext } from "./Context/SelectContext";
import ListPost from "./ListPost/ListPost";
import Header from "./Header/Header";
import Login from "./Login/Login";
import NotFound from "./NotFound/NotFound";
import AuthRoute from "./AuthRoute/AuthRoute";
import { useState } from "react";

function App() {
  const apiContext = useApiContext();
  const selectContext = useSelectContext();

  const dataLocal = JSON.parse(localStorage.getItem("user"));
  const [userData, setUserData] = useState(dataLocal);
  //const [data, setData] = useState("null");

  return (
    <>
      <Header />
      <ApiContext.Provider value={apiContext}>
        <SelectContext.Provider value={selectContext}>
          <Routes>
            <Route path="/" element={<Login setUserData={setUserData} />} />
            <Route
              path="/ListPost"
              element={
                <AuthRoute
                  user={userData}
                  component={<ListPost setUserData={setUserData} />}
                />
              }
            />
            <Route
              path="/CreatePost"
              element={
                <AuthRoute
                  user={userData}
                  component={<CreatePost setUserData={setUserData} />}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </SelectContext.Provider>
      </ApiContext.Provider>
    </>
  );
}

export default App;
