import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import { Fragment } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';


const App = () => {
  return(
  <div className='overflow-hidden'> 
  <Fragment>
    <Header /> 
    <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/Product/:id" element={<ProductDetails />} /> 
     </Routes>
     <Sidebar/>
     <Footer/>
  </Fragment> 
  </div>
  )
};

export default App;
