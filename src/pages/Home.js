import React from 'react';
import { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';

const Home = () => {
  const {products} = useContext(ProductContext)
  const FilteredProducts = products.filter((item)=>{
    return(item.category === "men's clothing" || item.category==="women's clothing")
  })
 
  return(
   <div>
    <section className='py-16'>
      <div className='container mx-auto'>
        <div className='grid'>
        {FilteredProducts.map((product)=>{
          return(
            <div className='bg-pink-200 w-full h-[300px] mb-4' id={product.id}>
              {product.title}
            </div>
          )

        })}
      </div>
      </div>
    </section>

    </div>);
};

export default Home;
