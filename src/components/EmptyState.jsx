import React from 'react'
import error from '../assets/Error 404.png'
import { Link } from 'react-router-dom'
import { GoArrowLeft } from "react-icons/go";


const EmptyState = () => {
  return (
    <div className=''>
        <div className='w-[50%] pt-[239px] mx-auto '>
            <img 
                className='h-[400px] bg-red-900'
                src={error} 
                alt="" />
        </div>
        <div className='grid place-items-center mt-[30px] text-fadeblue'>
            <Link to={'/'} className='flex items-center'>
                <span> 
                    <GoArrowLeft
                    size={30} /> 
                </span>
                <p className='pl-3 text-2xl'> 
                    Start Shopping
                 </p> 
            </Link>
        </div>
    </div>
  )
}

export default EmptyState