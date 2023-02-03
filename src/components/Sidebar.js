import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {IoMdArrowForward} from 'react-icons/io';
import {FiTrash2} from 'react-icons/fi';
import CartItem from '../components/CartItem'
import { SidebarContext} from '../contexts/SidebarContext'

const Sidebar = () => {
  const{isOpen, handleClose} = useContext(SidebarContext);
  return (
  <>
  <div className={`${ isOpen? 'right-0': 'right-full'} w-full bg-white  fixed top-0 h-full shadow-2xl md:w-[35vm] xl:max-w-[30vm] trasition-all duration-3--
  z-20 px-4 lg:px-[35px]`}>Sidebar</div>
  </>
  );
};

export default Sidebar;
