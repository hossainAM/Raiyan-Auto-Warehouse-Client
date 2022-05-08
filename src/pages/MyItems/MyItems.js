import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import MyItemDetails from './MyItemDetails';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);
    useEffect(() => {
        const email = user.email;
        const getItems = async() => {
            const url = `https://arcane-reaches-25713.herokuapp.com/newauto?email=${email}`
            const { data } = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            setItems(data);
        }
        getItems();

    }, [user]);
    return (
        <div>
            <div className = 'container grid sm:grid-cols-3 gap-5 mx-auto mt-6'>
                {
                items.map(item => <MyItemDetails key={item._id} item={item}></MyItemDetails>)
                }
            </div>
        </div>
    );
};

export default MyItems;