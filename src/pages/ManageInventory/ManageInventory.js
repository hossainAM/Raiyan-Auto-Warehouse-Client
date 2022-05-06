import React from 'react';
import useAutos from '../../CustomHooks/useAutos.js'
import Table from './Table.js';

const ManageInventory = () => {
    const [items, setItems] = useAutos([]);

    const column = [
        {heading: 'Category', value: 'category'},
        {heading: 'Model', value: 'modelName'},
        {heading: 'Features', value: 'description'},
        {heading: 'Price', value: 'price'},
        {heading: 'Supplier', value: 'supplier'},
        {heading: 'Stock', value: 'quantity'},
    ]
    
    return (
        <div>
            <h1 className='text-3xl text-center text-bold mt-4'>Raiyan Auto Warehouse Inventory</h1>
            <Table data={items} column={column}/>
        </div>
    );
};

export default ManageInventory;