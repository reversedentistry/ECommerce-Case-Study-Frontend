import React from 'react';
import './App.css';
import RegistrationPage from './components/Registration/Registration';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  <BrowserRouter>
    <Route path="register" element={<RegistrationPage/>}></Route>
  </BrowserRouter>
}

export default App;
