import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../../shared/Loader/Loader';
import InventoryItemDetails from './InventoryItemDetails';

const InventoryItem = () => {
   const [items, setItems] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   useEffect(() => {
       setIsLoading(true);
       fetch('https://arcane-reaches-25713.herokuapp.com/auto')
           .then(res => res.json())
           .then(data => {
               setItems(data)
               setIsLoading(false) 
            })
   }, []);

    return (
        <section className="text-gray-600 body-font">
            <h1 className='text-3xl mt-8 text-center'>Featured Categories</h1>
            <div className="container px-5 py-12 mx-auto">
                <div className="flex flex-wrap -mx-4 -mb-10 text-center">
                    {
                        isLoading ? <Loader/>
                        :
                        items.slice(0, 6).map(item => <InventoryItemDetails key={item._id} item={item}></InventoryItemDetails>)
                    }
                </div>
            </div>
            <div className='flex justify-center'>
                 <Link to="/manageinventory" className='my-24 px-4 py-1 bg-red-200 border border-red-300 rounded-full text-sm font-semibold hover:bg-red-500 hover:text-white hover:border-transparent focus:outline-none'>Manage Inventory</Link>
            </div>
        </section>
    );
};

export default InventoryItem;
