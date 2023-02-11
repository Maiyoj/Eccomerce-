import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { ProductContext } from '../contexts/ProductContext';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams();
  const {products} = useContext(ProductContext);
  const{addToCart} = useContext(CartContext);
  const product = products.find((item)=>{
    return item.id === parseInt(id);
  });
  if(!product){
    return(
      <section className='h-screen flex justify-center items-center'>
        Loading...
      </section>
    );
  }
 const {title,price,description,image } = product
  return (
 <section className='pt-32 pb-12 lg:py-32 h-screen'>
  <div className='container  mx-auto'>
    <div>Image</div>
    <div>Text</div>

  </div>
 </section>
  )
};

export default ProductDetails;
