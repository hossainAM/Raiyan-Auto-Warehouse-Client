import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const InventoryDetails = () => {
     const {id} = useParams();
     const [item, setItem] = useState({});
     const [reload, setReload] = useState(true);
     const numRef = useRef();

     useEffect(() => {
         const url = `https://arcane-reaches-25713.herokuapp.com/auto/${id}`
         fetch(url)
             .then(res => res.json())
             .then(data => setItem(data))
     }, [id, reload]);

     //Deliver quantity
     const handleDelivered =id => {
         const quantity = parseInt(item.quantity) - 1;

         const url = `https://arcane-reaches-25713.herokuapp.com/auto/${id}`
         fetch(url, {
             method: 'PUT',
             headers: {
                 'content-type': 'application/json'
             },
             body: JSON.stringify({quantity})
         })
         .then(res => res.json())
         .then(data => {
             console.log(data)
            setReload(!reload);
         })
     }

     //Restock quantity
     const handleRestock = e => {
        e.preventDefault();
        const prevQuantity = numRef.current.value;
        const quantity = parseInt(item.quantity) + parseInt(prevQuantity);

        const url = `https://arcane-reaches-25713.herokuapp.com/auto/${id}`
        fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    quantity
                })
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setReload(!reload);
            })

            //clear input field
            numRef.current.value = '';
     }

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
                <p className="title-font sm:text-2xl text-xl mb-4 font-medium text-gray-900">Product Id: <span className="title-font sm:text-xl text-xl mb-4 font-medium text-gray-900">{item._id}</span></p>
                <p className="mb-8 leading-relaxed">{item.description}</p>
                <p className="title-font sm:text-2xl text-xl mb-4 font-medium text-gray-900">Price: <span className="title-font sm:text-xl text-xl mb-4 font-medium text-gray-900">BDT{item.price}</span></p>
                <p className="title-font sm:text-2xl text-xl mb-4 font-medium text-gray-900">Supplier: <span className="title-font sm:text-xl text-xl mb-4 font-medium text-gray-900">{item.supplier}</span></p>
                {
                    item.quantity > 0 ?
                    <p className="title-font sm:text-2xl text-xl mb-4 font-medium text-gray-900"><span className="title-font sm:text-3xl text-2xl mb-4 font-bold text-gray-900">{item.quantity} </span>in Stock</p>
                    :
                    <p className="title-font sm:text-2xl text-xl mb-4 font-medium text-gray-900">Out of Stock</p>
                }
                <div className="flex justify-center">
                    <button onClick={() => handleDelivered(id)} className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg mr-3">Delivered</button>
                    <form onSubmit={handleRestock} action="#">
                        <div className='flex'>
                          <div>
                            <input ref={numRef}className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id="quantity" type="text" placeholder='Add quantity' required />
                         </div>
                         <div>
                            <input className="ml-3 inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg mr-3" type="submit" value="Restock"/>
                         </div>
                        </div>
                    </form>
                </div>
                </div>
            </div>
            <div>
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




