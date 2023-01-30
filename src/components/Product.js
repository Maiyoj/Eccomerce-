import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import {Bsplus,BsEyeFill} from 'react-icons/bs'


const Product = ({product}) => {
  const {id, image,category, price,title} = product;

  return (
  <div>
    <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
      <div>
        <div>
          <img src={image} alt=''/>
        </div>

      </div>
    </div>

  </div>
  )
};

export default Product;
