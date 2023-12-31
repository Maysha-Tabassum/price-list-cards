import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    const [prices, setPrices] = useState([]);
    useEffect(() => {
        fetch('prices.json')
            .then(res => res.json())
            .then(data => setPrices(data));
    }, [])
    return (
        <div className='mx-8 mt-6'>
            <h2 className='text-5xl font-bold text-center text-purple-950 p-4 bg-purple-500'>Awesome Affordable Prices</h2>
            <div className='md:grid grid-cols-3 gap-3'>
                {
                    prices.map(price => <PriceCard
                        key={price.id}
                        price={price}
                    ></PriceCard>)
                }

            </div>
        </div>
    );
};

export default PriceList;