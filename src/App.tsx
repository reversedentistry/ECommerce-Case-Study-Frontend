import React from 'react';
import "bulma/css/bulma.min.css";
import RegistrationPage from './components/Registration/Registration';
import ShopPage from './components/Shop/Shop';
import LoginPage from './components/Login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Shop/Cart';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<RegistrationPage />}></Route>
      <Route path="/login" element={<LoginPage/>}></Route>
      <Route path="shop" element={<ShopPage />}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App;
