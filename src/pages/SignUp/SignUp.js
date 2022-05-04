import React, { useRef } from 'react';
import auth from '../../firebase.init'
import {
    useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile
} from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css'

const SignUp = () => {
    const navigate = useNavigate();
    const nameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const [
        createUserWithEmailAndPassword,
    ] = useCreateUserWithEmailAndPassword(auth, {
        sendEmailVerification: true
    });

     //Email verification
     const [sendEmailVerification, sending, VerificationError] = useSendEmailVerification(auth);

    //Profile update
    const [updateProfile] = useUpdateProfile(auth);

    const handleLogin = () => {
    navigate('/login')
    }

    //  if (user) {
    //      console.log('user', user);
    //  }

    const handleSignup = async (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        //Create user
        await createUserWithEmailAndPassword(email, password)
        //Clear input field
        nameRef.current.value = '';
        emailRef.current.value = '';
        passwordRef.current.value = '';
        //Update profile
        await updateProfile({ displayName: name });
        //navigation
        navigate('/home')
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
            <form onSubmit={handleSignup} action="#">
              <div className='formContent'>
                <div className='signupForm'>
                    <div className='title'>Signup</div>
                    <div className='inputBoxes'>
                        <div className='inputBox'>
                            <i className='fas fa-envelope'></i>
                            <input ref={nameRef} className = 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id="name" type="text" placeholder='
                            Enter your name' required />
                        </div>
                        <div className='inputBox'>
                            <i className='fas fa-user'></i>
                            <input ref={emailRef} className = 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id="email" type="text" placeholder='
                            Enter your email' required />
                        </div>
                        <div className='inputBox'>
                            <i className='fas fa-lock'></i>
                            <input ref={passwordRef} className = 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                            id="password" type="password" placeholder='
                            Enter your password ' required />
                        </div>
                        <div className='button inputBox'>
                            <input type="submit" value="Submit" />
                        </div>
                        <div className='text loginText'>Already have an account? <Link to="/login" onClick={handleLogin}>
                        <label>Login now</label>
                        </Link></div>
                    </div>
                </div>
               </div>
            </form>
        </div>
        </section>
        </>
    );
};

export default SignUp;