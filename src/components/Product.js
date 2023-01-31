import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import {BsPlus,BsEyeFill} from 'react-icons/bs'


const Product = ({product}) => {
  const {id, image,category, price,title} = product;

  return (
  <div>
    <div className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'>
        <div className='w-full h-full flex justify-center items-center'>
          <div className='w-[200px] mx-auto flex justify-center items-center'>
             <div className=' absolute top-0 right-0 bg-red-500'>
              <button>
                <div className='flex justify-center items-center text-white w-12 h-12'>
                  <BsPlus className='text-3xl' />
                </div>

              </button>
            </div>
          <img className='max-h-[160px] group-hover:scale-110 transition duration-300' src={image} alt=''/>
          </div>
        </div> 
    </div>
    <div>2</div>
  </div>
  )
};

export default Product;
