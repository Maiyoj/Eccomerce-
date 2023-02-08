import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {IoMdArrowForward} from 'react-icons/io';
import {FiTrash2} from 'react-icons/fi';
import CartItem from '../components/CartItem';
import { SidebarContext} from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';



const Sidebar = () => {
  const {cart,clearCart} = useContext(CartContext);
  
  const{isOpen, handleClose} = useContext(SidebarContext);
  return (
  <>
  <div className={`${ isOpen? 'right-0' : '-right-full'} w-full bg-white  fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] trasition-all duration-300
  z-20 px-4 lg:px-[35px]`}>
  <div className='flex items-center justify-between py-6 border-b'>
  <div className='text-sm uppercase font-semibold'>Shopping Bag(0)</div>
  <div className='cursor-pointer w-8 h-8  flex justify-center items-center' onClick={handleClose}><IoMdArrowForward className='text-2xl'/></div>
   </div>
   <div>{cart.map((item)=>{
    return(
      <div><CartItem key={item.id} item={item}/></div>
    )
   })}
   </div>
   <div>
    <div className='bg-pink-200 flex w-full justify-between items-center'>
      <div >
        <span>Total:</span>$ 1000
      </div>
      <div onClick={clearCart} className='cursor-pointer py-4  bg-red-500 text-white h-12 w-12 flex justify-center items-center text-xl'>
        <FiTrash2/></div>
    </div>
   </div>
  </div>
  </>
  );
};

export default Sidebar;
