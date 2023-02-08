import React from 'react';
import { Link } from 'react-router-dom';
import {IoMdClose, IoMdAdd, IoMdRemove} from 'react-icons/io';

const CartItem = ({item}) => {
  const {id, image, title,price, amount} = item;
  return (
      <div className='flex'>
          <div className='w-full min-h-[150px] flex items-center gap-x-4'>
            <Link to={`/product/${id}`}>
            <img className='max-w-[80px]'  src={image} alt=""/></Link>
        <div className='flex flex-col w-full'>
        <div className='flex justify-between mb-2'>
        <Link to={`/product/${id}`} className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline">
             {title}
        </Link>
        <div className='text-sl cursor-pointer'>
        <IoMdClose className='text-grey hover:text-red-500 transition'/>
        </div>
        </div>
        <div className='bg-pink-200 flex gap-x-2 h-[36px] text-sm'>
          <div className=''>
          <div><IoMdRemove/></div>
          <div>{amount}</div> 
          <div><IoMdAdd/></div>
          <div>Item Price</div>
          <div>Final  Price</div>
          </div>

        </div>
      </div>
      </div>
      </div>
    )
};
export default CartItem;
