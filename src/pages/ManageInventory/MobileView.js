import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAutos from '../../CustomHooks/useAutos';
import MobileViewDetails from './MobileViewDetails';

const MobileView = () => {
    const [items, setItems] = useAutos([]);
    const navigate = useNavigate();

    return (
        <>  
        <div>
            <h1 className='text-3xl text-center text-bold mt-4'>Raiyan Auto Warehouse Inventory</h1>
            <div className='grid-cols-1 gap-2'>
                {
                    items.map(item => <MobileViewDetails key={item._id} item={item}></MobileViewDetails>)
                }
            </div>
        </div>
            <div className='flex justify-center'>
            <button onClick={() => navigate('/addinventory')} className='my-24 px-4 py-1 bg-red-200 border border-red-300 rounded-full text-sm font-semibold hover:bg-red-500 hover:text-white hover:border-transparent focus:outline-none'>Add New Items</button>
        </div>
       
        </>
    );
};

export default MobileView;