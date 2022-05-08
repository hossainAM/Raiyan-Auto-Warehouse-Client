import React from 'react';
import Footer from '../../shared/Footer/Footer';
import Banner from './Banner';
import ContactUs from './ContactUs';
import Dealership from './Dealership';
import InventoryItem from './InventoryItem';

const Home = () => {
    return (
        <>
        <div>
           <Banner></Banner>
           <InventoryItem></InventoryItem>
           <Dealership></Dealership>
           <ContactUs></ContactUs>
        </div>
        <Footer></Footer>
        </>
    );
};

export default Home;