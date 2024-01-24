import React from 'react';
import LandPage from './landing_page/LandPage'; // Adjust import
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './Pages/Register';
import Login from  './Pages/Login';
import { Logout } from './Pages/Logout';

const LandPageWrapper = () => {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<LandPage/>}/>
            <Route path='/login' element={<Login/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/logout' element={<Logout/>}/>
          </Routes>
      </BrowserRouter>
        
    </>
  ); 
}





export default LandPageWrapper;

