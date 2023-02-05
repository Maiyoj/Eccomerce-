import React from 'react';
import { createContext, useEffect, useState } from 'react';

export const CartContext = createContext()

const CartProvider = ({children}) => {

  const [] = useState([]) 

  return (
    <div>
    <CartContext.Provider>
    {children }
  </CartContext.Provider>
  </div>
  )
};

export default CartProvider;
