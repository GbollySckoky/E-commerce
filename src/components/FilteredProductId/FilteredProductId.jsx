import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { Heart } from 'react-feather'
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { GoChevronDown } from "react-icons/go";
import { GoChevronUp } from "react-icons/go";
import { addToCart } from '../../features/addCartSlice';
import {useDispatch} from "react-redux";
import Loading from '../reusable/Loading'
import Datas from '../reusable/Datas'
import EnhanceLook from './EnhanceLook'
const links = [
  {name:"New Arrivals", id:1},
  {name:"Trending Now", id:2},
  {name:"Shop by Occasion", id:3},
  {name:"Shop by Product", id:4},
  {name:"Gifting", id:5},
  {name:"Magazine", id:6},
  {name:"Sustainability", id:7}
]

const FilteredProductId = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(null)
    const [isOpen, setIsOpen] = useState(false);
    const { id } = useParams();
    const dispatch = useDispatch()
    
    const [data, setData]  = useState({})
    useEffect(() => {
      const product = Datas.find((data) => data.id === parseInt(id))
      try{
        if(product){
          setData(product);
          setIsLoading(false);
        }else{
          throw new Error("couldn't find product check your internet connection")
        }
      }catch(err){
        setIsError(err.message)
        setIsLoading(false)
      }
    }, [ id ]);

    if(isLoading) {
      return (
          <div>
              <Loading />
          </div>
      )
  }
  if(isError){
      return (
          <div className='flex justify-center items-center'>
             <p>{isError}</p> 
          </div>
      )
  }
    const toggleIndex = () => {
      setIsOpen(!isOpen);
    };

    const handleAddCart = (data) => {
      dispatch(addToCart(data));
    }

  return (
    <div className='lg:pt-[164px] pt-[130px]'>
      <ul 
        className='lg:flex items-center mt-[13px] justify-center bg-fadeblue 
        text-white py-[15px] text-sm font-[200] lg:static hidden'>
          {links.map((link) => (
            <li key={link.id}>
                <Link className='px-7'>{link.name}</Link>
            </li>
          ))}
      </ul>
        {<div className='xl:flex mt-[30px] w-[95%] gap-5 mx-auto'>
        <div>
        {data.images && Array.isArray(data.images) ?(
          <div className='grid grid-cols-2 lg:gap-10 gap-3'>
            { data.images.map((image) => (
              <div className="preview" key={image}>
                <img src={image} alt={image.productName} />
              </div>
            ))}
        </div>
        ):(
          <img src={data.images} alt={data.images}/>
        )}
        </div>
    
        <div className='w-full pt-[30px]  mt-[40px] lg:mt-0  bg-lightBlue px-[40px]'>
          <div className='flex items-center justify-between mb-[30px]'>
              <div className='text-fadeblue'>
                <h1 className='pb-2 font-[700] text-xl'>{data.productName}</h1>
                <span className='font-[500] text-xl'>&#x20A6;{data.newPrice}</span>
                <del className='text-sm ml-3'>&#x20A6;{data.oldPrice}</del>
              </div>
              <span className='text-fade'>< Heart /></span> 
            </div>

            {/* image */}
            <div className='w-[200px] border border-black p-3 mb-5' >
                <img src={data.img} alt={data.productName} />
            </div>

            {/* sizes */}
            <p className='pb-2 text-xl font-[300]'>Size</p>
            <div className='flex text-fadeblue cursor-pointer pb-6'>
              {data.size && data.size.map((size) => (
                <div className="preview" key={size}>
                  <p className='size lg:px-10 px-7 py-2 mr-7 border
                   bg-white border-fadeblue'>
                    {size}
                  </p>
                </div>
              ))}
            </div>
            {/* colors */}
            <div className='pb-3'>
              {Array.isArray(data.color) ? (
                <ul>
                  {data.color && data.color.map((color) => (
                  <li tyle={{ backgroundColor: data.color, width: '10px', 
                  height: '10px', borderRadius: '50%', marginRight: '5px',}} key={color}> </li>
              ))}
                </ul>
              ):(
                <li style={{ backgroundColor: data.color, width: '10px', 
                height: '10px', borderRadius: '50%', marginRight: '5px',}}></li>
              )}
            </div>
            {/* Add Cart */}
            <div className='mb-[40px]'>
                {/* <div className='flex items-center justify-center text-white mt-10 bg-fadeblue p-4'> */}
                <button className='border-none text-xl font-[400] 
                flex justify-center p-4 items-center rounded-full 
                bg-fadeblue text-white w-full'
                onClick={() => handleAddCart(data)}>
                  <span className='text-xl pr-4'> <HiOutlineShoppingBag /></span>
                  Add To Cart</button>
                {/* </div> */}
                <p className='text-red-500 lg:w-[450px] pt-2 text-center mx-auto'>Member get 20% off every item  for their first time 
                  delivery over $40. Not A member yet? Join Now
                </p>
            </div>
          
            {/* find store */}
            <div className='mb-[60px]'>
              <div className='flex items-center text-fadeblue pb-5'>
              <span className='text-xl'><HiOutlineShoppingBag/></span>
              <p className='pl-3 font-[300]'>Find Store</p>
              </div>
              <p className='lg:w-[650px] lg:pl-8 text-fadeblue tracking-wide font-[300] text-center text-lg'>Member get 20% off every item  for their first time delivery over $40. 
                Not A member yet? Join Now
              </p>
            </div>
        
            {/* Delivery */}
            <div className='text-fadeblue'>
              {data && (
                <div>
                  <h1 className='text-center font-[700] mb-[40px] text-lg'>Delivery And Payment</h1>

                  {/* True Size */}
                  <div className='my-[30px]'>
                  <p className='pb-4'>True Size</p>
                    <div className='flex mx- w-full'>
                      <p className='w-full h-[1px] bg-fadeblue'></p>
                      <p className='w-full h-[1px] ml-[20px] bg-fadeblue'></p>
                    </div>
                    <div className='flex pt-4 justify-between items-center'>
                      <p>Small</p>
                      <p>Spot On</p>
                      <p>Large</p>
                    </div>
                  </div>
                  {/* Length */}
                  <div className='my-[30px]' >
                    <p className='pb-4'>Length</p>
                    <div className='flex mx- w-full'>
                      <p className='w-full h-[1px] bg-fadeblue'></p>
                      <p className='w-full h-[1px] ml-[20px] bg-fadeblue'></p>
                    </div>
                    <div className='flex pt-4 justify-between items-center'>
                      <p>Small</p>
                      <p>Spot On</p>
                      <p>Large</p>
                    </div>
                  </div>
                  <hr />
                  <div
                    className='flex cursor-pointer pt-4 items-center justify-between'
                    onClick={toggleIndex}
                  >
                    <p >{data.productQuestion}</p>
                    {isOpen ? <GoChevronUp /> : <GoChevronDown />}
                  </div>
                  {isOpen && (
                    <ul className='flex pt-3 flex-col'>
                      <li>{data.productDetails}</li>
                    </ul>
                  )}
                  <hr />
                </div>
              )}
            </div>

            {/* Care Guide */}
            <div className='flex pt-4 items-center justify-between'>
              <p>Care Guide</p>
              <span><GoChevronDown /></span>
            </div>
            <hr />
            {/* Materials */}
            <div className='flex pt-4 items-center pb-[30px] justify-between'>
              <p>Material</p>
              <span><GoChevronDown /></span>
            </div>
         </div>
      </div>
      }
      <EnhanceLook />
    {/* {error && <div className='text-center'>{error}</div>} */}
    </div>
  )
}

export default FilteredProductId;
