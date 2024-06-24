import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
        <footer className=' bg-black text-white mt-[90px] '>
            <ul className='lg:flex items-center justify-between py-4 w-[95%] mx-auto'>
                <li className='py-2 lg:py-0'>
                    <Link className='text-base' to={"#"}>Let Us Help You</Link>
                </li>
                <li className='py-2 lg:py-0'>
                    <Link className='text-base' to={"#"}>Get To Know Us</Link>
                </li>
                <li className='py-2 lg:py-0'>
                    <Link className='text-base' to={"#"}>Explore</Link>
                </li>
                <li className='py-2 lg:py-0'>
                    <Link className='text-base' to={"#"}>Corporate Info</Link>
                </li>
            
                <p className='text-base py-3 lg:py-0'>PoshPace 2024. All Right Reserved</p>
            
                <li className='py-2 lg:py-0'>
                    <Link className='text-base' to={"#"}>Help</Link>
                </li>
                <li className='py-2 lg:py-0'>
                    <Link className='text-base' to={"#"}>Privacy</Link>
                </li>
                <li className='py-2 lg:py-0'>
                    <Link className='text-base' to={"#"}>Shipping</Link>
                </li>
                <li className='py-2 lg:py-0'>
                    <Link className='text-base' to={"#"}>FAQs</Link>
                </li> 
            </ul>
        </footer>
    </div>
  )
}

export default Footer