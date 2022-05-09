import React, { useEffect, useState } from 'react';

const MobileViewDetails = ({item}) => {
     //Reload- other options of reload like passing state array or reload state to dependency array didn't work here unlike other components; hence window reload method is used here;
     function refreshPage() {
         window.location.reload(false);
     }
    const {image, category, modelName, price, quantity, supplier} = item;

    const [items, setItems] = useState([]);
    const [reload, setReload] = useState(true);
    useEffect(() => {
        fetch('https://arcane-reaches-25713.herokuapp.com/auto')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [reload]);

    //Remove item
    const handleRemove = id => {
        const isProceed = window.confirm('Are you sure you want to remove item');
        if (isProceed) {
            const url = `https://arcane-reaches-25713.herokuapp.com/auto/${id}`
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const rests = items.filter(item => item._id !== id);
                    setItems(rests);
                    setReload(!reload);
                }
            })
        }
    }

    return (
        <>
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden transform hover:scale-105 duration-500 mt-6">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={image} alt="services"/>
                <div className="p-6 flex flex-col items-center">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Category: {category}</h2>
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Model Name: {modelName}</h2>
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Supplier: {supplier}</h2>
                    <p className="title-font text-lg font-medium text-gray-900 mb-3">Price: BDT {price}</p>
                    <p className="leading-relaxed mb-3">Quantity: {quantity}</p>
                    <div className="flex items-center flex-wrap ">
                    <button onClick={() => handleRemove(item._id)} className="ml-3 inline-flex text-white bg-red-500 border-0 py-1 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Remove Item</button>
                     <button onClick={refreshPage} className="ml-3 inline-flex text-white bg-red-500 border-0 py-1 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Click to Reload!</button>
                    </div>
            </div>
        </div>
        </>
    );
};

export default MobileViewDetails;