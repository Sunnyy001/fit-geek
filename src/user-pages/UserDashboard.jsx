// import React, { useEffect } from "react";
import { useAuth } from "../store/authContext";
import { Navigate } from "react-router-dom";
import NutritionTracker from "../user-pages/NutritionTracker";
// import NutritionixAPI from "../user-pages/NutritionTracker";

export const UserDashboard = () => {
    const {isLoggedIn, isLoading} = useAuth();
    if(isLoading){
        return <h1>Loading....</h1>
    }

    if(!isLoggedIn){
        return <Navigate to={"/login"}/>
    }



  return (
    <>
      <h1>Hello, this is Dashboard</h1>
      <NutritionTracker/>
      {/* <NutritionixAPI/> */}
    </>
  );
};
