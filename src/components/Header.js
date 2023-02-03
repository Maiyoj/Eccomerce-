import React from 'react';
import { useContext } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';

const Header = () => {
  const {isOpen, setIsOpen} = useContext(SidebarContext);
  return (
  <>
  <div>Header</div>
 <div onClick={()=>setIsOpen(!isOpen)}>Open/CloseSideBar</div> 
  </>
  );
};

export default Header;
