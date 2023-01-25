import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import ProductsDetails from './pages/ProductsDetails';
import { Fragment } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';


const App = () => {
  return(
  <Fragment>
    <Routes>
     <Route exact path="/" element={<Home />} />
     {/* <Route exact path="/ProductsDetails" element={<ProductsDetails />} /> */}
     </Routes>
  </Fragment> 
  )
};

export default App;
