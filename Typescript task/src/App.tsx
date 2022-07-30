import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import PropertyDetails from './Components/PropertyDetails';
import HomePage from './Components/HomePage';
import Listings from './Components/Listings';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/about" element={<PropertyDetails/>}/>
     
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
