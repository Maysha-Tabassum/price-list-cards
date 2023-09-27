import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Feature = ({ feature }) => {
    return (
        <div className='flex items-center mt-3'>
            <CheckCircleIcon className="h-5 w-5 text-purple-700" />
            <h1 className='pl-3'>{feature}</h1>
        </div>
    );
};

export default Feature;