import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import { getDataUserForAuth } from '../Services/UserApi';


function Logout({userData, setUserData, authData, setAuthData}) {
    const navigate = useNavigate();

    useEffect(() => {
      if (authData) {
      getDataUserForAuth(userData.token).then((info) => {
        console.log(info);
        setAuthData(info);
      })
    }}, []);
  
    const handleClickYes = () => {
      setUserData(null);
      localStorage.removeItem("user");
      navigate("/");
    };
  
    const handleClickNo = () => {
      navigate("/ListPost")
    };
  
    return (
      <>
      <Header />
      <h2 className="logout-title">Cerrar sesión</h2>
      <div>
          <p className="logout-msg">¿Estás seguro de que quieres cerrar sesión?</p>
          <ul className="logout-options">
              <li className="logout-yes-li"><button className="logout-btn" onClick={handleClickYes}>Sí</button></li>
              <li className="logout-no-li"><button className="logout-btn" onClick={handleClickNo}>No</button></li>
          </ul>
      </div>
      </>
    )
}

export default Logout