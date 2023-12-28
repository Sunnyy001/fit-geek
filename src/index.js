import React from 'react';
import ReactDOM from 'react-dom'; 
import GatherRoutes from './Gather';
import { BrowserRouter } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <React.StrictMode>
      <GatherRoutes/>
    </React.StrictMode>
  </BrowserRouter>

);