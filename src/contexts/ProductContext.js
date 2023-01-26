import React, { Children } from 'react';
import {Fragment, createContext, useState, useEffect } from 'react';

export const ProductContext = createContext();

const ProductProvider = ({Children}) => {
  const [products, setProducts] = useState([])
  return
  (
  <Fragment>
  <ProductContext.Provider>
  <Children />
</ProductContext.Provider>

    </Fragment>
  ;)
};

export default ProductContext;
