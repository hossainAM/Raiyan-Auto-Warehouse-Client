import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyItems = () => {
    const [user] = useAuthState(auth);
    const [items, setItems] = useState([]);
    useEffect(() => {
        const email = user.email;
        const getItems = async() => {
            const url = `http://localhost:5000/newauto?email=${email}`
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
            <h1>My Items: {items.length}</h1>
        </div>
    );
};

export default MyItems;