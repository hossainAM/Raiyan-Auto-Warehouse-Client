import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const InventoryDetails = () => {
    const {id} = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/auto/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [id]);

    return (
        <>
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <img className="object-cover object-center rounded" alt="hero" src={item.image}/>
                </div>
                <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{item.category}</h1>
                    <br className="hidden lg:inline-block"/><h1 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-gray-900">{item.modelName}
                </h1>
                <p className="mb-8 leading-relaxed">{item.description}</p>
                <p className="title-font sm:text-2xl text-xl mb-4 font-medium text-gray-900">Price: <span className="title-font sm:text-xl text-xl mb-4 font-medium text-gray-900">BDT{item.price}</span></p>
                <p className="title-font sm:text-2xl text-xl mb-4 font-medium text-gray-900">Supplier: <span className="title-font sm:text-xl text-xl mb-4 font-medium text-gray-900">{item.supplier}</span></p>
                <p className="title-font sm:text-2xl text-xl mb-4 font-medium text-gray-900"><span className="title-font sm:text-3xl text-2l mb-4 font-bold text-gray-900">{item.quantity} </span>in Stock</p>
                <div className="flex justify-center">
                    <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg mr-3">Delivered</button>
                    <form action="#">
                        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id="quantity" type="text" placeholder='Add quantity' required />
                    </form>
                     <button className="ml-3 inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg mr-3">Submit</button>
                </div>
                </div>
            </div>
            {/* Manage Inventory */}
            <div className='flex justify-center'>
                <Link to="/manageinventory" className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Manage Inventory</Link>
            </div>
        </section>
        </>
    );
};

export default InventoryDetails;



