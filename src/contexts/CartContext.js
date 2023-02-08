import React from 'react';
import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext()

const CartProvider = ({children}) => {
  
 const addToCart = (id)=>{
  console.log(`Add ${id} to Cart`)
 }

  return (
    <div>
    <CartContext.Provider value={{addToCart}}>
    {children }
  </CartContext.Provider>
  </div>
  )
};

export default CartProvider;
