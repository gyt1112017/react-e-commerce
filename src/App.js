import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './Welcome';
import Products from './Products';
import Basket from './Basket';
import MainNavigation from './MainNavigation';

function App() {
  return (
    <Router>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/products" element={<Products />} />
        <Route path="/basket" element={<Basket/>} />
      </Routes>
    </Router>
  );
}

export default App;
