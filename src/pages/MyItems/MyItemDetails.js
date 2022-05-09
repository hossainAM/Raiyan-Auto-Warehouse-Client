import React, { useState } from 'react';

const MyItemDetails = ({item}) => {
    const {_id, image, category, name, price, supplier, quantity} = item;

    const [items, setItems] = useState([]);

    const handleDelete = id => {
          const isProceed = window.confirm('Are you sure you want to remove item');
          if (isProceed) {
              const url = `https://arcane-reaches-25713.herokuapp.com/auto/${id}`
              fetch(url, {
                      method: 'DELETE'
                  })
                  .then(res => res.json())
                  .then(data => {
                      if (data.deletedCount > 0) {
                          const rests= items.filter(item => item._id !== id);
                          setItems(rests);
                      }
                  })
          }
    }

    return (
        <>
            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden transform hover:scale-105 duration-500">
                <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={image} alt="services"/>
                <div className="p-6 flex flex-col items-center">
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Category: {category}</h2>
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Model Name: {name}</h2>
                    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Supplier: {supplier}</h2>
                    <p className="title-font text-lg font-medium text-gray-900 mb-3">Price: BDT {price}</p>
                    <p className="leading-relaxed mb-3">Quantity: {quantity}</p>
                    <div className="flex items-center flex-wrap ">
                    <button onClick={() => handleDelete(_id)} className = "px-4 py-1 bg-green-100 border border-green-200 rounded-full text-sm font-semibold hover:bg-green-200 hover:text-black hover:border-transparent focus:outline-none cursor-pointer" > Remove Item
                    </button>
                </div>
            </div>
        </div>
        </>
    );
};

export default MyItemDetails;