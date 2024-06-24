import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import EnhanceSingle from './EnhanceSingle';
import Datas from '../reusable/Datas'
const EnhanceLook = () => {
  const [filteredProducts, setFilteredProducts] = useState([]); //Filter state
  const [products, setProducts] = useState([]); //Set state for datas
  const { category } = useParams();

  useEffect(() => {
    if(Datas){
      setProducts(Datas)
    }
  }, [])

  // Filter State
  useEffect(() => {
    if (products && products.length > 0 && category) {
      const filtered =products.filter(product => product.category === category);
      setFilteredProducts(filtered);
    }
  }, [products, category]);


  return (
    <div className=' mt-[50px] w-[95%] mx-auto'>
        <h1 
          className='my-[50px] text-lg font-[700] text-fadeblue'>
            YOU MAY ALSO FIND THIS APPEALING
        </h1>
        <div 
          className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-9 mb-7 '>
          {filteredProducts.slice(5, 20).map((product) => (
            <div className="preview " key={product.id}>
             <EnhanceSingle product={product} />
            </div>
          ))}
        </div>
    </div>
  );
};

export default EnhanceLook;
