// Gather.js
import React from 'react';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp'
import { createBrowserRouter, RouterProvider,  } from 'react-router-dom';
import LandPage from './landing_page/Land_page'; // Adjust import
import Error from './Pages/Error';

const LandPageWrapper = () => {
  return (
    <>
      <LandPage.Header/>
      <LandPage.Body />
      <LandPage.Community />
      <LandPage.Footer /> 
    </>
  ); 
}

const dbConnect = require("../db/dbConnect");

dbConnect();

const appRouter = createBrowserRouter([
  {path: "/signup", element: <SignUp/>},
  {path:"/Login",  element: <Login/>},
  {path: "/", errorElement: <Error/> ,element: <LandPageWrapper/>}
]);

const GatherRoutes = () => {
  return (
    <RouterProvider router={appRouter}/>
  );
}

export default GatherRoutes;

module.exports = {
  // ... other configurations
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
  },
};