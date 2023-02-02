import React from 'react';
import { useState, createContext } from 'react';

export const SidebarContext = createContext();


const SidebarProvider = ({children}) => {
  return (
  <div>
  <SidebarContext.Provider value={{products}}>
  {children }
</SidebarContext.Provider>

  </div>);
};

export default SidebarContext;
