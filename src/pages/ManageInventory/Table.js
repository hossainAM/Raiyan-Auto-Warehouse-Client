import React from 'react';
import './Table.css'
import TableRow from './TableRow';

const Table = ({ data, column }) => {
    return (
        <>
        <table className='container'>
            <thead>
                <tr>
                    {
                        column.map((item) => <TableHeadItem key={item._id} item={item} />)
                    }
                </tr>
            </thead>
            <tbody>
                {
                    data.map((item) => <TableRow key={item._id} item={item} column={column} />)
                }
            </tbody>
        </table>
        </>
    );

};

const TableHeadItem = ({ item }) => <th>{item.heading}</th>

export default Table;