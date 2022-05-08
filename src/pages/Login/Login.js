import React, { useRef } from 'react';
import axios from 'axios';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import './Login.css'
import Loader from '../../shared/Loader/Loader.js'
import SocialLogIn from './SocialLogIn';
import toast, { Toaster } from 'react-hot-toast';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    const location = useLocation();

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth); 

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let from = location.state?.from?.pathname || "/";

    const handleLogin = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        await signInWithEmailAndPassword(email, password);
        const {
            data
        } = await axios.post('https://arcane-reaches-25713.herokuapp.com/login', {email});
        localStorage.setItem('accessToken', data.accessToken);
        navigate(from, { replace: true });
    }

    if(loading || sending) {
       return <Loader></Loader>
    }

    let errorMessage;
    if (error) {
      errorMessage = <p>Error: {error?.message}</p>
    }

    const handleSignUp = () => {
        navigate('/signup')
    }

    //Reset Password
    const handlePasswordReset = async () => {
        const email = emailRef.current.value;
        if(email){
              await sendPasswordResetEmail(email);
              toast('Sent email');
        }
        else{
            toast('Please Provide your Email Address')
        }
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
                        <div className='text'>
                            <p className='text-center mt-2'>Forgot Password? <button onClick={handlePasswordReset} className='btn btn-link '>Reset Password</button></p>
                        </div>
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
                <Toaster/>
            </form>
        </div>
        </section>
        </>
    );
};

export default Login;