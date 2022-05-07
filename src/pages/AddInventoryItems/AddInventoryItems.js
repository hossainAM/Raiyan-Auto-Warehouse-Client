import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const AddInventoryItems = () => {
    const [user] = useAuthState(auth);
    const categoryRef = useRef();
    const nameRef = useRef();
    const descRef = useRef();
    const priceRef = useRef();
    const imgRef = useRef();
    const supplierRef = useRef();
    const quantityRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = user.email;
        const category = categoryRef.current.value;
        const name = nameRef.current.value;
        const description = descRef.current.value;
        const price = priceRef.current.value;
        const image = imgRef.current.value;
        const supplier = supplierRef.current.value;
        const quantity = quantityRef.current.value;

        const newItem = {
            email, category, name, description, price, image, supplier, quantity
        }

        //post data//new collection and end point need to be created
        const url = `http://localhost:5000/auto`
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
        .then(res => res.json())
        .then(data => console.log(data))//toast can be used 'new item is added';

        //clear input field
        categoryRef.current.value = '';
        nameRef.current.value = '';
        descRef.current.value = '';
        priceRef.current.value = '';
        imgRef.current.value = '';
        supplierRef.current.value = '';
        quantityRef.current.value = '';

    }

    return (
        <>
        <section className='contentWrapper'>
        <div className='formContainer'>
            <div className='containerCover'>
                 <div className='front'>
                    <img src={'https://i.postimg.cc/zvmnfDkb/car-banner.png'} alt="" />
                    <div className='text'>
                        <span className='text-1'>Raiyan Auto Warehouse</span>
                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmit} action="#">
              <div className='formContent'>
                <div className='signupForm'>
                    <div className='title'>Add New Item</div>
                    <div className='inputBoxes'>
                        <div className='inputBox'>
                            <input className = 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id="name" value={user?.displayName} type="text" placeholder='
                            User Name' required readOnly disabled/>
                        </div>
                        <div className='inputBox'>
                            <input className = 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id="email" value={user?.email}type="email" placeholder='
                            User Email' required readOnly disabled/>
                        </div>
                        <div className='inputBox'>
                            <input ref={categoryRef} className = 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id="category" type="text" placeholder='
                            Enter auto category' required />
                        </div>
                        <div className='inputBox'>
                            <input ref={nameRef} className = 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id="name" type="text" placeholder='
                            Enter model name' required />
                        </div>
                        <div className='inputBox'>
                            <input ref={imgRef} className = 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id="imageURL" type="text" placeholder='
                            Enter image url'/>
                        </div>
                        <div>
                            <textarea ref={descRef} className = 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id="description" type="text" placeholder='
                            Enter features/specifications' name="description"  cols="30" rows="10"></textarea>
                        </div>
                        <div className='inputBox'>
                            <input ref={priceRef} className = 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id="price" type="text" placeholder='
                            Enter auto price' required />
                        </div>
                        <div className='inputBox'>
                            <input ref={quantityRef} className = 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id="quantity" type="text" placeholder='
                            Enter number in stock' required />
                        </div>
                        <div className='inputBox'>
                            <input ref={supplierRef} className = 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id="supplier" type="text" placeholder='
                            Enter supplier name' required />
                        </div>
                        <div className='button inputBox'>
                            <input type="submit" value="Add New Item" />
                        </div>
                    </div>
                </div>
               </div>
            </form>
        </div>
        </section>
        </>
    );
};

export default AddInventoryItems;