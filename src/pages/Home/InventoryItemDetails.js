import React from 'react';
import { useNavigate } from 'react-router-dom';

const InventoryItemDetails = ({item}) => {
    const {id, category, modelName, image, description, price, quantity, supplier} = item;

    const navigate = useNavigate();

    return (       
        <div className="sm:w-1/2 mb-10 px-4">
            <div className="rounded-lg h-64 overflow-hidden">
            <img alt="content" className="object-cover object-center h-full w-full" src={image}/>
            </div>
            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">{category}</h2>
            <h2 className="title-font text-1xl font-medium text-gray-900 mt-6 mb-3"><span>Model: </span>{modelName}</h2>
            <p className="leading-relaxed text-base">{description}</p>
            <h2 className="title-font text-1xl font-medium text-gray-900 mt-6 mb-3"><span>Price: BDT</span>{price}</h2>
            <h2 className="title-font text-1xl font-medium text-gray-900 mt-6 mb-3"><span>Supplier: </span>{supplier}</h2>
            <h2 className="title-font text-1xl font-medium text-gray-900 mt-6 mb-3"><span>Stock: </span>{quantity}</h2>
            <button onClick={() => navigate(`/inventory/:${id}`)} className="flex mx-auto mt-6 text-white bg-red-500 border-0 py-2 px-5 focus:outline-none hover:bg-red-600 rounded">Stock Update</button>
        </div>
    );
};

export default InventoryItemDetails;