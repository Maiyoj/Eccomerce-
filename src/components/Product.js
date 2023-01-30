import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import {Bsplus,BsEyeFill} from 'react-icons/bs'


const Product = ({product}) => {
  const {id, image,category, price,title} = product;

  return (
  <div>
    <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
        <div className='w-full h-full flex justify-center items-center'>
          <div className='w-[200px] mx-auto flex justify-center items-center'>
          <img className='max-h-[160px] group-hover:scale-110 transition duration-300' src={image} alt=''/>
          </div>
        </div> 
    </div>

  </div>
  )
};

export default Product;
