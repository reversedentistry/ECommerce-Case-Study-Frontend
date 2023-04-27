import React from 'react';
import "bulma/css/bulma.min.css";
import RegistrationPage from './components/Registration/Registration';
import ShopPage from './components/Shop/Shop';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="register" element={<RegistrationPage />}></Route>
      <Route path="/" element={<ShopPage />}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App;
