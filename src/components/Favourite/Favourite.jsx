import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Heart } from 'react-feather';
import { HiArrowLeft, HiOutlineShoppingBag } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import { LiaStoreAltSolid } from "react-icons/lia";
import { removeFromFavourites } from '../../features/addFavouritesSlice';
import { addToCart } from '../../features/addCartSlice';

const Favourite = () => {
  const favourites = useSelector((state) => state.favourites?.favourites || []);
  const dispatch = useDispatch();

  const handleRemoveFavorite = (favourite) => {
    dispatch(removeFromFavourites(favourite));
  };

  const handleAddToCart = (favourite) => {
    dispatch(addToCart(favourite));
  };

  return (
    <div className='pt-[210px]'>
      <h1 className='text-center font-[700] text-3xl text-fadeblue pb-[30px]'>FAVOURITES</h1>
      {favourites.length === 0 ? (
        <div className='flex flex-col items-center justify-center h-[54.2vh] w-[95%] mx-auto text-center'>
          <p className='font-[500] lg:text-2xl text-base'>
            YOUR FAVOURITES CATALOGUE IS CURRENTLY EMPTY
          </p>
          <Link to="/">
            <div className='flex text-xl py-2 items-center font-[500]'>
              <span className='pr-2'>
                <HiArrowLeft />
              </span>
              <span>
                Start Shopping
              </span>
            </div>
          </Link>
        </div>
      ) : (
        <div className='flex w-[90%] mx-auto'>
          <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-10 w-full text-fadeblue'>
            {favourites.map((favourite) => (
              <div className="preview mb-4" key={favourite.id}>
                <img src={favourite.img} alt={favourite.productName} />
                <div className='bg-[#d9dcde] px-6 py-3'>
                  <div className='flex items-center justify-between'>
                    <p className='py-2 font-[400] text-lg'>{favourite.productName}</p>
                    <p onClick={() => handleRemoveFavorite(favourite)} className='text-red-600 cursor-pointer'><MdCancel /></p>
                  </div>
                  <p className='py-2'>&#x20A6;{favourite.newPrice}</p>
                  <div className='flex items-center py-2 justify-between'>
                    <p>New Arrivals</p>
                    <div className='flex items-center'>
                      <span><LiaStoreAltSolid /></span>
                      <span>Find in Store</span>
                    </div>
                  </div>
                  <div>
                    {Array.isArray(favourite.color) ? (
                      <ul className='flex py-2'>
                        {favourite.color.map((color) => (
                          <li
                            style={{ backgroundColor: color, width: '10px', height: '10px', borderRadius: '50%', marginRight: '5px' }}
                            key={color}>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className='py-2'>
                        <p style={{ backgroundColor: favourite.color, width: '10px', height: '10px', borderRadius: '50%', marginRight: '5px' }}></p>
                      </div>
                    )}
                  </div>
                  <div>
                    {Array.isArray(favourite.size) ? (
                      <div className='flex py-2'>
                        <span className='pr-3'>Size:</span>
                        {favourite.size.map((item) => (
                          <div className="preview" key={item}>
                            <p className='pr-5'>{item}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <p>{favourite.size}</p>
                    )}
                  </div>
                </div>
                <div className='flex'>
                  <button
                    className='flex w-full justify-center bg-fadeblue py-3 text-white items-center'
                    onClick={() => handleAddToCart(favourite)}>
                    <span><HiOutlineShoppingBag /></span>
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Favourite;
