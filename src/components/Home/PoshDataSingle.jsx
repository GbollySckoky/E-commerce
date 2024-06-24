import React, { useState } from 'react';
import { addToFavourites, removeFromFavourites } from '../../features/addFavouritesSlice';
import { Heart } from 'react-feather';
import { IoMdHeart } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { useParams, Link } from 'react-router-dom';

const PoshDataSingle = ({ product }) => {
    const [likes, setLikes] = useState(false);
    const dispatch = useDispatch();
    const { category } = useParams();


    const handleLikes = () => {
        setLikes(prev => !prev);
        if (!likes) {
            dispatch(addToFavourites(product));
        } else {
            dispatch(removeFromFavourites({ id: product.id, productName: product.productName }));
        }
    };

    return (
        <div>
            <Link to={`/product/${category}/${product.id}`}>
                <img src={product.img} alt={product.productName} />
            </Link>
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
    );
};

PoshDataSingle.propTypes = {
    product: PropTypes.object.isRequired,
};

export default PoshDataSingle;
