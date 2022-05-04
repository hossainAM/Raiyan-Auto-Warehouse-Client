import React, { useEffect, useRef } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'
import Loader from '../../shared/Loader/Loader.js'
import SocialLogIn from './SocialLogIn';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let from = location.state?.from?.pathname || "/";

    const handleLogin = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }

   useEffect(() => {
		if(user) {
		navigate(from, {
			replace: true
		});
	}
	}, [from, navigate, user])

    if(loading) {
       return <Loader></Loader>
    }

    let errorMessage;
    if (error) {
      errorMessage = <p>Error: {error?.message}</p>
    }

    const handleSignUp = () => {
        navigate('/signup')
    }

    return (
        <>
        <section className='contentWrapper'>
        <div className='formContainer'>
            <div className='containerCover'>
                <img src={'https://i.postimg.cc/zvmnfDkb/car-banner.png'} alt="" />
                <div className='text'>
                    <span className='text-1'>Raiyan Auto Warehouse</span>
                </div>
            </div>
            <form onSubmit={handleLogin} action="#">
                <div className='formContent'>
                    <div className='loginForm'>
                    <div className='title'>Login</div>
                    <div className='inputBoxes'>
                        <div className='inputBox'>
                            <i className='fas fa-envelope'></i>
                            <input ref={emailRef} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id="email" type="text" placeholder='Enter your email' required />
                        </div>
                        <div className='inputBox'>
                            <i className='fas fa-lock'></i>
                            <input ref={passwordRef} className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id="password" type="password" placeholder='Enter your password' required />
                        </div>
                        <div className='text'><a href="#">Forgot password?</a></div>
                        <div className='button inputBox'>
                            <input type="submit" value="Submit" />
                        </div>
                        <div className='text signupText'>Don't have an account? <Link to="/signup" onClick={handleSignUp}>
                        <label>Signup now</label>
                        </Link></div>
                    </div>
                     <SocialLogIn></SocialLogIn>
                     <p className='text-red-500 text-center'>{errorMessage}</p>
                </div>
                </div>
            </form>
        </div>
        </section>
        </>
    );
};

export default Login;