import React from 'react';
import { Link, useParams } from 'react-router-dom';
// import useAutoDetails from '../../CustomHooks/useAutoDetails';

const InventoryDetails = () => {
    // const {id} = useParams();
    // const [item] = useAutoDetails(id);
    // console.log(item)

    return (
        <div>
            <h1>This is inventory Details page</h1>
            <div className='flex justify-center'>
                 <Link to="/manageinventory" className='my-24 px-4 py-1 bg-red-200 border border-red-300 rounded-full text-sm font-semibold hover:bg-red-500 hover:text-white hover:border-transparent focus:outline-none'>Manage Inventory</Link>
            </div>
        </div>
    );
};

export default InventoryDetails;