import React from 'react'
import { Navigate } from 'react-router-dom'

function AuthRoute({user, component, redirectPath}) {
    console.log(user);
    
    if(user) {
        return component
    } else {
       return <Navigate to="/" state={{from: redirectPath}} />;
    }
}

export default AuthRoute