import PoshDataSingle from './PoshDataSingle';
import Loading from '../reusable/Loading';
import Datas from '../reusable/Datas';
import { useEffect, useState } from 'react';

const PoshData = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);
    const [isError, setIsError] = useState(null);

    useEffect(() => {
        try {
            if (Datas) {
                setProducts(Datas);
                setIsLoading(false);
            } else {
                throw new Error("No Data found, check your internet connection");
            }
        } catch (err) {
            setIsError(err.message);
            setIsLoading(false);
        }
    }, []);

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
        <div className='w-[85%] mx-auto mt-[30px]'>
            <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-7 mb-7'>
                {products.slice(0, 17).map((product) => (
                    <div className="preview" key={product.id}>
                        <PoshDataSingle product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PoshData;
