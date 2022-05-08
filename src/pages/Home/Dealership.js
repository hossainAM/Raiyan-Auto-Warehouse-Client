import React from 'react';

const Dealership = () => {
    return (
       <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Used Car Dealership</h1>
            <h1 className="title-font sm:text-2xl text-3xl mb-4 font-medium text-gray-900">Serving the Dhaka, Savar, Gazipur, Narayanganj, Purbachol, and Keraniganj Areas</h1>
            <p className="mb-8 leading-relaxed">Raiyan Auto Warehouse provides an extensive selection of latest-model, pre-owned vehicles to car shoppers in Dhaka and the surrounding area. From our Bashundhara location, we are able to serve a wide area, including Savar, Gazipur, Narayanganj, Purbachol, and Keraniganj.</p>
            <p className="mb-8 leading-relaxed">
            We have over 30 years of experience in the automotive industry. Visitors to Raiyan Auto Warehouse will find a no-hassle car shopping experience, as we are a no-haggle dealership. The price you see on our vehicle is the lowest price we are able to offer and we would be glad to help you find a vehicle that suits your needs and fits within your budget. Our inventory is well-stocked with an impressive selection of pre-owned vehicles. Most of our inventory is from recent model years with under 45,000 miles. Take a look at our selection or stop in to browse our lot!</p>
            <button className="ml-3 inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg mr-3">About Us</button>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src="https://i.ibb.co/NTD53x0/keys-b.png"/>
            </div>
        </div>
    </section>
    );
};

export default Dealership;