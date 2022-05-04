import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth'
import { useLocation, useNavigate } from 'react-router-dom';
import Loader from '../../shared/Loader/Loader';

const SocialLogIn = () => {
     const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
     const location = useLocation();
     const navigate = useNavigate();

     let from = location.state?.from?.pathname || "/";

     let errorMessage;
     if(error) {
        errorMessage =  <p>Error:{error?.message}</p>
     }

     if(loading) {
         return <Loader></Loader>
     }

    if (user) {
        navigate(from, {
            replace: true
        });
    }

    return (
       <>
         <h1 className='text-center mb-2'>.................Or.................</h1>
         <div className='flex justify-center mb-3'>
			<button onClick={() => signInWithGoogle()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
			Login with Google
		    </button>
		</div>
         <p className='text-center text-red-500'>{errorMessage}</p>
        </>
    );
};

export default SocialLogIn;