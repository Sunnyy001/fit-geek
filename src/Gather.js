// Gather.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './Pages/Login';
import LandPage from './landing_page/Land_page'; // Adjust import

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

const GatherRoutes = () => {
  return (
    <Routes>
      <Route path="/Login" element={<Login />} />
      <Route path="/" element={<LandPageWrapper/>} />
    </Routes>
  );
}

export default GatherRoutes;
