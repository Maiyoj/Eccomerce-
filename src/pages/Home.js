import React from 'react';
import { useContext } from 'react';
import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product';
import { SidebarContext } from '../contexts/SidebarContext';

const Home = () => {
 
  const {products} = useContext(ProductContext)
  const FilteredProducts = products.filter((item)=>{
    return(item.category === "men's clothing" || item.category==="women's clothing")
  })
 
  return(
   <div>
    <section className='py-16'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px]
        max-w-sm mx-auto md:max-w-none mx-0'>
        {FilteredProducts.map((product)=>{
          return(
           <Product key={product.id} id={product.id} product={product}/> 
          )

        })}
      </div>
      </div>
    </section>

    </div>);
};

export default Home;
