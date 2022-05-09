import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const TableRow = ({ item, column }) => {
    //Reload- other options of reload like passing state array or reload state to dependency array didn't work here unlike other components; hence window reload method is used here;
     function refreshPage() {
         window.location.reload(false);
     }

     const [items, setItems] = useState([]);
     useEffect(() => {
         fetch('https://arcane-reaches-25713.herokuapp.com/auto')
             .then(res => res.json())
             .then(data => setItems(data))
     }, []);
    
     //Remove item
    const handleRemove = id => {
        const isProceed = window.confirm('Are you sure you want to remove item');
        if(isProceed) {
            const url = `https://arcane-reaches-25713.herokuapp.com/auto/${id}`
            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                if(data.deletedCount > 0){
                    const rests = items.filter(item => item._id !== id);
                    setItems(rests);
                }
                if(data.deleteCount === 0){
                    toast('Sold Out')
                }
            })
        }
    }
    return (
        <>
        <tr>
            {
                column.map(columnItem => {
                    return <td>{item[`${columnItem.value}`]}</td>
                })
            }
             <td>
                 <button onClick={() => handleRemove(item._id)} className="ml-3 inline-flex text-white bg-red-500 border-0 py-1 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Remove Item</button>
             </td>
             <td>
                 <button onClick={refreshPage} className="ml-3 inline-flex text-white bg-red-500 border-0 py-1 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Click to Reload!</button>
             </td>
        </tr>
        <Toaster/>
        </>
    );
};

export default TableRow;
