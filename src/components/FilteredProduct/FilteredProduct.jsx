import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GoChevronDown } from "react-icons/go";
import { CiFilter } from "react-icons/ci";
import { Link } from "react-router-dom";
import FilteredProductSingle from './FilteredProductSingle';
import Loading from '../reusable/Loading';
import Datas from '../reusable/Datas'; // Data of array

const sorts = [
    { id: 1, name: "SORT BY", icon: <GoChevronDown /> },
    { id: 2, name: "COLOUR", icon: <GoChevronDown /> },
    { id: 3, name: "SIZE", icon: <GoChevronDown /> },
    { id: 4, name: "BRAND", icon: <GoChevronDown /> },
    { id: 5, name: "PATTERNS", icon: <GoChevronDown /> },
];

const links = [
    { name: "New Arrivals", id: 1 },
    { name: "Trending Now", id: 2 },
    { name: "Shop by Occasion", id: 3 },
    { name: "Shop by Product", id: 4 },
    { name: "Gifting", id: 5 },
    { name: "Magazine", id: 6 },
    { name: "Sustainability", id: 7 },
];

const FilteredProduct = () => {
    const [filteredProducts, setFilteredProducts] = useState([]); // state that holds the data filtered
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(null);

    const { category } = useParams();

    useEffect(() => {
        try {
            if (Datas) {
                setFilteredProducts(Datas);
                setIsLoading(false);
            } else {
                throw new Error("No Data found, check your internet connection");
            }
        } catch (err) {
            setIsError(err.message);
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        if (Array.isArray(Datas)) {
            setFilteredProducts(Datas.filter((data) => data.category === category));
        } else {
            setFilteredProducts([]);
        }
    }, [category]);

    if (isLoading) {
        return (
            <div>
                <Loading />
            </div>
        );
    }

    if (isError) {
        return (
            <div className='flex justify-center items-center'>
                <p>{isError}</p>
            </div>
        );
    }

    return (
        <div className='lg:pt-[178px] pt-[130px]'>
            <ul className='lg:flex items-center justify-center bg-fadeblue text-white py-[19px] text-sm font-[200] lg:static hidden'>
                {links.map((link) => (
                    <li key={link.id}>
                        <Link className='px-7'>{link.name}</Link>
                    </li>
                ))}
            </ul>
            <h1 className='text-center lg:my-[30px] my-[40px] text-[#001F3F] text-lg font-bold'>
                UP TO 50% OFF FRESH FINDS
            </h1>
            <div id='tip' className='lg:flex items-center justify-center hidden lg:static'>
                {sorts.map((sort) => (
                    <div className='lg:pl-[60px]' key={sort.id}>
                        <p>{sort.name}</p>
                        <span className='pl-1'>{sort.icon}</span>
                    </div>
                ))}
                <div className='pl-[40px]'>
                    <span className='pr-1'><CiFilter /></span>
                    <p>FILTER</p>
                </div>
            </div>
            <div>
                <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-[35px] lg:mt-[50px] w-[80%] mx-auto'>
                    {filteredProducts.map((product) => (
                        <div key={product.id}>
                            <FilteredProductSingle product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FilteredProduct;
