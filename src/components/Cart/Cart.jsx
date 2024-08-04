import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Heart } from 'react-feather';
import { GoChevronDown } from "react-icons/go";
import one from '../../assets/one.svg';
import two from '../../assets/two.svg';
import four from '../../assets/four.svg';
import { HiArrowLeft } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { MdCancel } from "react-icons/md";
import { removeFromCart, deceraseProductCart, increaseProductCart, getTotals} from '../../features/addCartSlice'

  const Cart = () => {
  const { CartItems} = useSelector((state) => state.Cart)

  const dispatch = useDispatch()

  const handleRemove = (CartItem) => {
    dispatch(removeFromCart(CartItem))
  }
  const handleDecrease = (CartItem) => {
    dispatch(deceraseProductCart(CartItem))
  }
  const handleIncrement = (CartItem) => {
    dispatch(increaseProductCart(CartItem))
  }

  useEffect(() => {
    dispatch(getTotals())
  }, [CartItems],dispatch)

  // Calculate cart total amount
  const calculateCartTotalAmount = () => {
    let totalAmount = 0;
    CartItems.forEach(item => {
        if (item.newPrice) {
            totalAmount += item.newPrice * item.cartQuantity;
        }
    });
    return totalAmount;
}

const amount = 15000

  return (
    <div>
      <div className='pt-[150px]'>
        <h1 className='text-center lg:font-[700] lg:text-3xl text-xl font-[500]
           text-fadeblue  pt-[50px] pb-[30px]'>
            SHOPPING BAG
        </h1>
        {Cart && CartItems.length === 0 
        ? <div className='flex flex-col items-center justify-center h-[52vh]'>
          <p className='font-[500] lg:text-2xl text-base'>YOUR SHOPPING BAG IS CURRENTLY EMPTY</p>
          
            <Link to="/">
            <div className='flex text-xl py-2 items-center font-[500]'>
              <span className='pr-2'><HiArrowLeft/></span>
              <span>Start Shopping </span>
              </div>
            </Link>
        </div>
        : <div className='xl:flex w-[90%] mx-auto'>
          <div className='flex flex-col w-full text-fadeblue'>
          {CartItems.map((CartItem) => (
            <div className="preview lg:flex mb-4 bg-[#dde0e3] p-5 w-full" key={CartItem.id}>
              <img className='lg:w-[20%] lg:h-[200px]' src={CartItem.img} alt="" />
              <div className='lg:ml-9'>
                <div className='flex items-center justify-between xl:w-[32vw]'>
                    <p className='py-2 font-[400] text-lg'>{CartItem.productName}</p>
                    <span onClick={() => handleRemove(CartItem)} className='cursor-pointer text-red-500'><MdCancel /></span>
                </div>
                <p className='py-1'>&#x20A6;{CartItem.newPrice}</p>
                <div className='grid lg:grid-cols-4 grid-cols-2  justify-items-center justify-content-center'>
                  <div className='xl:pr-8 '>
                  <p className=' py-2'>Art No</p>
                  <p> 116673345290</p>
                  </div>
                  <div className='px-5 py-3 lg:py-0 text-end'>
                  <p className='py-2 '>Color</p>
                  <p>Brown</p>
                  </div>
                  <div className='px-5'>
                  <p className='py-2  '>Size</p>
                  <p>M</p>
                  </div>
                  <div className='px-5 py-3 lg:py-0 text-end'>
                  <p className='py-2'>Total </p>
                  <p>&#x20A6; {CartItem.newPrice * CartItem.cartQuantity}</p>
                  </div>
                </div>
                <div className='flex items-center mt-4'>
                    <span className=' border cursor-pointer border-fade text-fade p-1'><Heart /></span>
                    <div className='border border-fade flex items-center ml-[40px] p-2'>
                      <button onClick={() => handleDecrease(CartItem)} className='px-2'>-</button>
                      <p className='px-2'>{CartItem.cartQuantity}</p>
                      <button onClick={() => handleIncrement(CartItem)} className='px-2'>+</button>
                    </div>
                </div>
              </div>
            </div>
          ))}
          </div>
          <div className='w-full xl:ml-2  xl:h-[80vh] pb-[30px] text-fadeblue bg-[#eaeef1] '>
            <div className=' px-8'>
              <h1 className='py-5 lg:font-[500] lg:text-2xl text-xl'>ORDER SUMMARY</h1>
              {CartItems.slice(0,1).map((CartItem) => (
                <div className="preview" key={CartItem.id}>
                  <div className='py-3 flex items-center justify-between'>
                    <span className='font-[400] text-lg'>Subtotal</span>
                    <span className='text-lg lg:font-[500]'>&#x20A6; {calculateCartTotalAmount()} </span>
                  </div>
                  <div className='py-3 flex items-center justify-between'>
                    <span className='text-lg'>Shipping</span>
                    <span className='text-lg lg:font-[500]'>&#x20A6; 15000</span>
                  </div>
                  <div className='py-3 flex items-center justify-between'>
                    <span className='text-lg'>Tax</span>
                    <span className='text-end lg:font-[400] lg:text-lg'>Calculated In Checkout</span>
                  </div>
                  <hr className="bg-white"/>
                  <div className='flex items-center justify-between'>
                    <p className='lg:text-xl lg:font-[700] font-[400] text-lg'>PromoCode</p>
                    <span>< GoChevronDown/></span>
                  </div>
                  <hr className="bg-white"/>
                  <div className='flex items-center justify-between'>
                    <p className='text-lg'>Estimated Total</p>
                    <p className='lg:text-2xl'>&#x20A6; {calculateCartTotalAmount() + 15000}</p>
                  </div>
                  <div className="mx-[50px] my-[50px]">
                    <button className='bg-fadeblue w-full py-4 lg:font-[700] lg:text-xl text-white' type='submit'>
                      Proceed to Checkout
                    </button>
                  </div>
                  <div  className='imgs flex justify-center'>
                    <img src={four} alt="" />
                    <img src={one} alt="" />
                    <img src={two} alt="" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        }
      </div>
    </div>
  )
}

export default Cart
