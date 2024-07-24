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
import Register from "./Register/Register";
import EditPost from "./EditPost/EditPost";
import Detail from "./Detail/Detail";
import Logout from "./Logout/Logout";

function App() {
  const apiContext = useApiContext();
  const selectContext = useSelectContext();

  const dataLocal = JSON.parse(localStorage.getItem("user"));
  const [userData, setUserData] = useState(dataLocal);
  const [authData, setAuthData] = useState(null);

  return (
    <>
      <ApiContext.Provider value={apiContext}>
        <SelectContext.Provider value={selectContext}>
          <Routes>
            <Route
              path="/"
              element={<Login setUserData={setUserData} />}
            />
            <Route 
            path="/register" 
            element={<Register />} />
            <Route 
            path="/logout"
            element={
            <AuthRoute
              user={userData}
              component={
                <Logout 
                  userData={userData}
                  setUserData={setUserData}
                  authData={authData}
                  setAuthData={setAuthData}
                />
              } 
            /> } />
            <Route
              path="/ListPost"
              element={
                <AuthRoute
                  user={userData}
                  component={
                    <ListPost
                      userData={userData}
                      setAuthData={setAuthData}
                      authData={authData}
                    />
                  }
                />
              }
            />
            <Route
              path="/CreatePost"
              element={
                <AuthRoute
                  user={userData}
                  component={
                    <CreatePost userData={userData} setAuthData={setAuthData} />
                  }
                />
              }
            />
            <Route
              path="/EditPost"
              element={
                <AuthRoute
                  user={userData}
                  component={
                    <EditPost userData={userData} authData={authData} setAuthData={setAuthData} />
                  }
                />
              }
            />
            <Route 
            path="/Detail/:idPost" element={<Detail userData={userData} authData={authData} setAuthData={setAuthData}/>} />
            <Route path="*" element={<NotFound userData={userData} />} />
          </Routes>
        </SelectContext.Provider>
      </ApiContext.Provider>
    </>
  );
}

export default App;
