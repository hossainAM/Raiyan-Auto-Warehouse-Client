import React, { useEffect, useState } from 'react';
import InventoryItemDetails from './InventoryItemDetails';

const InventoryItem = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    // console.log(items)
    return (
        <section className="text-gray-600 body-font">
            <h1 className='text-3xl mt-8 text-center'>Featured Categories</h1>
            <div className="container px-5 py-12 mx-auto">
                <div className="flex flex-wrap -mx-4 -mb-10 text-center">
                    {
                        items.slice(0, 6).map(item => <InventoryItemDetails key={item.id} item={item}></InventoryItemDetails>)
                    }
                </div>
            </div>
            <div className='flex justify-center'>
                 <button className='my-24 px-4 py-1 bg-red-200 border border-red-300 rounded-full text-sm font-semibold hover:bg-red-500 hover:text-white hover:border-transparent focus:outline-none'>Manage Inventory</button>
            </div>
        </section>
    );
};

export default InventoryItem;
