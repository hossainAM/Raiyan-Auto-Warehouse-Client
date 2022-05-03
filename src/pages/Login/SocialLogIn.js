import React from 'react';

const SocialLogIn = () => {
    return (
       <>
         <h1 className='text-center mb-2'>.................Or.................</h1>
         <div className='flex justify-center mb-3'>
			<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
			Google Sign in
		    </button>
		</div>
        </>
    );
};

export default SocialLogIn;