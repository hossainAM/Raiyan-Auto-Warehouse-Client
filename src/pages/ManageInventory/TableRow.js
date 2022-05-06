import React from 'react';

const TableRow = ({ item, column }) => {
    return (
        <>
        <tr>
            {
                column.map(columnItem => {
                    return <td>{item[`${columnItem.value}`]}</td>
                })
            }
             <td>
                 <button className="ml-3 inline-flex text-white bg-red-500 border-0 py-1 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Remove Item</button>
             </td>
        </tr>
        </>
    );
};

export default TableRow;
