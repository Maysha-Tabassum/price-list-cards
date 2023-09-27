import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({ price }) => {
    return (
        <div className='bg-indigo-400 mt-4 p-3 rounded-md flex flex-col'>
            <h2 className='text-center'>
                <span className='text-5xl font-extrabold text-purple-800'>{price.price}</span>
                <span className='text-2xl font-bold text-white'>/ mon</span>
            </h2>
            <h3 className='text-2xl my-6 text-center font-bold'>{price.name}</h3>
            <p className='font-bold text-white underline'>Features :</p>
            {
                price.features.map((feature, idx) => <Feature
                    key={idx}
                    feature={feature}
                ></Feature>)
            }
            <button className='bg-green-600 py-2 mt-auto text-center rounded-md text-white font-extrabold w-full'>Buy Now</button>
        </div>
    );
};

export default PriceCard;