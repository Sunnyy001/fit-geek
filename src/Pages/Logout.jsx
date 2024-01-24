import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuthTokenProvider } from "../store/authContext";


export const Logout = () =>{
    const {LogoutUser} = useAuthTokenProvider();
    useEffect (()=>{
        LogoutUser();
    }, [LogoutUser]);

    return <Navigate to={'/login'}/>
};
