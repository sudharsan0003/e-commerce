import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Cart from './components/Cart/Cart';
import Products from './components/Products/Product';
import Productdetails from './components/Productdetails/Productdetail';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Products />} />
        <Route path='/productdetails/:id' element={<Productdetails />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
