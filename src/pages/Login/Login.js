import React from 'react';
import './Login.css'
import SocialLogIn from './SocialLogIn';

const Login = () => {
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
            <form action="#">
                <div className='formContent'>
                    <div className='loginForm'>
                    <div className='title'>Login</div>
                    <div className='inputBoxes'>
                        <div className='inputBox'>
                            <i className='fas fa-envelope'></i>
                            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id="email" type="text" placeholder='Enter your email' required />
                        </div>
                        <div className='inputBox'>
                            <i className='fas fa-lock'></i>
                            <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id="password" type="password" placeholder='Enter your password' required />
                        </div>
                        <div className='text'><a href="#">Forgot password?</a></div>
                        <div className='button inputBox'>
                            <input type="submit" value="Submit" />
                        </div>
                        <div className='text signupText'>Don't have an account? <label>Signup now</label></div>
                    </div>
                     <SocialLogIn></SocialLogIn>
                </div>
                </div>
            </form>
        </div>
        </section>
        </>
    );
};

export default Login;