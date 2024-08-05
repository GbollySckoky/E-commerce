import React, { useState } from 'react'
import {Link, useNavigate } from 'react-router-dom'
import { filteredProduct } from '../../features/productSlice'
import { useDispatch, useSelector } from 'react-redux'
import { TiShoppingCart } from "react-icons/ti";
import { MdOutlineMenu } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { MdOutlineArrowDownward } from "react-icons/md";

const NavBar = () => {
    const {cartTotalQuantity} = useSelector((state) => state.Cart)
    const navigate = useNavigate()
    const navBars =[ 
    "Women",
    'Men',
    'Kids',
    'Beauty',
    'Shoes & Accessories',
    'UnderWear',
    'Sale',
]
    const dispatch = useDispatch()
    const [toggle, setToggle] = useState(false)
    const handleClick = () => {
        setToggle((prev) => !prev)
    }
  return (
    <div className='fixed w-full z-[999]'>
        <div>
        <div className='hidden lg:block ' >
            <nav 
                className='flex items-center justify-between px-[100px] bg-fadeblue w-screen text-white h-[60px]'>
                <ul className='flex text-sm font-thin ' >
                    <li className='pr-6'>
                        <Link to={"#"}>Customer Service</Link>
                    </li>
                    <li className='pr-6'>
                        <Link to={'#'}>Store Locator</Link>
                    </li>
                </ul>
                <div className='btn text-3xl  border-none bg-transparent'>
                    <Link to={"/"}>Posh Pace</Link>
                </div>
                <div className='flex text-sm font-thin'>
                    <li className='pr-6'>
                        <Link to={"#"}>News Letter</Link>
                    </li>
                    <li className='list-none pl-6 flex items-center'>
                        <Link to={"/products/shoppingbag"}>shopping Bag</Link>
                        <div className='flex relative pl-1 '>
                            <span className='text-xl'><TiShoppingCart /></span>
                            <span className=' rounded-full 
                            ml-1 absolute bottom-4 right-0'>
                                {cartTotalQuantity}</span>
                        </div>
                    </li>
                </div>
            </nav>
        </div>

        <div className='bg-fadeblue relative w-full lg:hidden '>
            { toggle &&
                <nav 
                    className=' absolute w-full bg-fadeblue text-white mt-[50px] pl-[22px] animate-slide-in'
                    >
                    <ul className='flex flex-col text-sm font-thin '>
                        <li className='py-4 text-base font-[400]'>
                            <Link to={"#"}>Customer Service</Link>
                        </li>
                        <li className='py-4 text-base font-[400]'>
                            <Link to={'#'}>Store Locator</Link>
                        </li>
                        <li className='py-4 text-base font-[400]'>
                            <Link to={"#"}>News Letter</Link>
                        </li>
                        <li className='list-none py-4 text-base font-[400]'>
                            <Link to={"#"}>sign in</Link>
                        </li>
                        <li className='list-none py-4 text-base font-[400]'>
                            <Link to={"/products/favourites"}> Favourites</Link> 
                        </li>
                        
                    </ul>
                </nav>
            }
            {
            toggle && 
                <div className='flex flex-col top-[329px] absolute w-full bg-fadeblue text-white animate-slide-in pl-[22px]'>
                    <div className='flex items-center justify-between pr-[22px]'>
                        <h1 className='py-4 font-extralight text-xl'>Check out our various products</h1>
                        <span><MdOutlineArrowDownward className='text-xl' /></span>
                    </div>
                    {
                        navBars.map((nav, index) => (
                            <div className=" text-base py-4 font-[400]" key={index}>
                                <button 
                                    onClick={() => { 
                                        dispatch(filteredProduct(nav));
                                        navigate(`/products/${nav}`);
                                        setToggle(false);
                                    }}
                                    className='hover:text-red-500'
                                > 
                                    {nav}
                                </button>
                            </div>
                        ))
                    }
                </div>
            }
            <div className='flex items-center justify-between py-[15px] w-[90%] mx-auto text-white'>
                <div className='btn text-2xl border-none bg-transparent'>
                    <Link to={"/"}>Posh Pace</Link>
                </div>
                <div className="flex items-center">
                    <li className=' text-base font-[400] flex pr-4 items-center'>
                        <Link to={"/products/shoppingbag"}>
                        <div className='flex relative  '>
                            <span className='text-xl'><TiShoppingCart /></span>
                            <span className=' rounded-full 
                                ml-1 absolute bottom-4 right-0'>
                                {cartTotalQuantity}
                            </span>
                        </div>
                        </Link>
                    </li>
                    <div className='cursor-pointer text-2xl'>
                    {toggle ? <IoMdClose onClick={handleClick} /> : <MdOutlineMenu onClick={handleClick} />}
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className='lg:flex justify-center items-center hidden lg:static bg-tomato text-white px-[10px] h-[50px] '>
            {
                navBars.map((nav, index) => (
                <div className="px-[30px] text-sm text font-extralight" key={index}>
                    <Link to={`/products/${nav}`}>
                        <button 
                        onClick={() => dispatch(filteredProduct(nav))}
                        >{nav}
                        </button>
                    </Link>
                </div>
                ))
            }
        </div>
        <div className='flex w-full'>
            <p 
                className='py-5 text-white bg-black w-[50%] text-center lg:text-xl 
                lg:font-[400] text-sm px-5 cursor-pointer'>
                UP TO 50% OFF FRESH FINDS
            </p>
            <p 
                className='bg-white text-center w-[50%] text-fadeblue py-5 lg:text-xl 
                lg:font-[400] text-sm px-5 cursor-pointer'>
                FREE WORLDWIDE DELIVERY
            </p>
        </div>

    </div>
  )
}

export default NavBar