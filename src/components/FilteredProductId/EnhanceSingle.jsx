import React, {useState} from 'react'
import { Heart } from 'react-feather';
import { IoMdHeart } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';


const EnhanceSingle = ({product}) => {
    const dispatch = useDispatch();
    const [likes, setLikes] = useState(false)

    const handleLikes = () => {
        setLikes(prev => !prev); // Toggle like state
        if(!likes){
            toast.success(`${product.productName} liked successfully`)
        }else{
            toast.error(`${product.productName} removed successfully`)
        }
    }
  return (
    <div>
         <img src={product.img} alt="" />             
              <div className='text-[#001F3F]'>
                <div className='flex items-center justify-between'>
                    <p className='font-[500] py-2 text-[16px]'>{product.productName}</p>
                    <span
                        onClick={handleLikes}
                        className={`bottom-3 cursor-pointer text-2xl ${likes ? 'text-red-500' : 'text-fade'}`}
                    >
                        {likes ? <IoMdHeart /> : <Heart />}
                    </span>
                </div>
                {Array.isArray(product.color) ? (
                    <ul className='flex'>
                        {product.color.map((color) => (
                            <li
                                style={{
                                    backgroundColor: color,
                                    width: '10px',
                                    height: '10px',
                                    borderRadius: '50%',
                                    marginRight: '5px',
                                }}
                                key={color}
                            ></li>
                        ))}
                    </ul>
                ) : (
                    <p
                        style={{
                            backgroundColor: product.color,
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            marginRight: '5px',
                        }}
                    ></p>
                )}
                <p className='text-end font-size-[10px] font-[400]'>New Arrivals</p>
                <p className='text-fadeblue'>&#x20A6;{product.newPrice}</p>
              </div>
    </div>
  )
}

export default EnhanceSingle