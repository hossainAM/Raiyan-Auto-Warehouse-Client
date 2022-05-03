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
            {/* <div className="w-full h-96 ">
             <img src={'https://i.postimg.cc/zvmnfDkb/car-banner.png'} className="object-cover w-full h-full" alt=""/>
            </div> */}
            <div className='absolute top-1/3 left-1/2 space-y-4'>
                <h1 className='text-7xl text-white uppercase'>Raiyan Auto</h1>
                <h1 className='text-7xl text-white uppercase'>Warehouse</h1>
            </div>
        </div>
    );
};

export default Banner;