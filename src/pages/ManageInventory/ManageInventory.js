import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAutos from '../../CustomHooks/useAutos.js'
import Table from './Table.js';

const ManageInventory = () => {
    const [items] = useAutos([]);
    const navigate = useNavigate();

    const column = [
        {heading: 'Category', value: 'category'},
        {heading: 'Model', value: 'modelName'},
        {heading: 'Features', value: 'description'},
        {heading: 'Price', value: 'price'},
        {heading: 'Supplier', value: 'supplier'},
        {heading: 'Stock', value: 'quantity'},
    ]
    
    return (
        <>
        <div>
            <h1 className='text-3xl text-center text-bold mt-4'>Raiyan Auto Warehouse Inventory</h1>
            <Table data={items} column={column}/>
        </div>
        <div className='flex justify-center'>
            <button onClick={() => navigate('/addinventory')} className='my-24 px-4 py-1 bg-red-200 border border-red-300 rounded-full text-sm font-semibold hover:bg-red-500 hover:text-white hover:border-transparent focus:outline-none'>Add New Items</button>
        </div>
        </>
    );
};

export default ManageInventory;