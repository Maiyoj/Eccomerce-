import React from 'react';
import { createContext, useEffect, useState } from 'react';
import Product from '../components/Product';

export const CartContext = createContext()

const CartProvider = ({children}) => {
  const [cart, setCart] = useState([]);
  //Increase Amount
  const IncreaseAmount = ((id)=>{
    const item = cart.find((item) => item.id === id);
    addToCart(item, id)
  });


  //clear cart 
  const clearCart = () => {
     setCart([])
  }
  
  //add to cart
 const addToCart = (product, id)=>{
  const newItem = {...product, amount: 1}
  const cartItem = cart.find(item=>{
    return (item.id === id);
  });
  //if cart item exist
  if (cartItem) {
    const newCart = [...cart].map((item)=>{
      if (item.id ===id ) {
        return ({...item, amount: cartItem.amount + 1});
      }
      else {
        return item;
      }
    });
    setCart(newCart);
  }
  else setCart([...cart, newItem]);
 };

 //remove cart Item
const removeFromCart = ((id)=>{
 const newCart = cart.filter((item)=>{
  return(
    item.id != id
  );
 });
 setCart(newCart)
})
 
  return (
    <div>
    <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart,IncreaseAmount}}>
    {children }
  </CartContext.Provider>
  </div>
  )
};

export default CartProvider;
