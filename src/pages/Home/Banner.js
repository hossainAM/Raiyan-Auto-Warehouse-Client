import React from 'react';

const Banner = () => {
    return (
        <div className='relative'>
            <div className='w-full h-screen bg-no-repeat bg-cover md:bg-fixed' 
            style = {
                {
                    backgroundImage: "url('https://i.postimg.cc/zvmnfDkb/car-banner.png')"
                }
            }>
                
            </div>
            <div className='absolute top-1/3 sm:left-1/2 left-1/4 space-y-4'>
                <h1 className='md:text-7xl text-4xl text-white uppercase'>Raiyan Auto</h1>
                <h1 className='sm:text-7xl text-4xl text-white uppercase'>Warehouse</h1>
            </div>
        </div>
    );
};

export default Banner;