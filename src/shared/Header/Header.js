import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';

const Header = () => {
     const [user] = useAuthState(auth);

     const handleSignOut = () => {
         signOut(auth);
     }
    return (
        <header className="text-gray-600 bg-red-700 body-font sticky">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to="/home" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <span className="ml-3 text-xl text-gray-100">Raiyan Auto Warehouse</span>
                </Link>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                <NavLink style={({ isActive }) => isActive ? {textDecoration: 'underline'} : undefined} to="/" className="mr-5 text-gray-100 hover:text-gray-900">Home</NavLink>
                <NavLink style={({ isActive }) => isActive ? {textDecoration: 'underline'} : undefined} to="/blog" className="mr-5 text-gray-100 hover:text-gray-900">Blog</NavLink>
                </nav>
                {user && <>
                <NavLink style={({ isActive }) => isActive ? {textDecoration: 'underline'} : undefined} to="/manageinventory" className="mr-5 text-gray-100 hover:text-gray-900">Manage Inventory</NavLink>

                <NavLink style={({ isActive }) => isActive ? {textDecoration: 'underline'} : undefined} to="/addinventory" className="mr-5 text-gray-100 hover:text-gray-900">Add Inventory Items</NavLink>
                
                <NavLink style={({ isActive }) => isActive ? {textDecoration: 'underline'} : undefined} to="/myitems" className="mr-5 text-gray-100 hover:text-gray-900">My Items</NavLink>
                </>
                }
                {user ? 
                <NavLink style={({ isActive }) => isActive ? {textDecoration: 'underline'} : undefined} onClick={handleSignOut} to="/login" className="mr-5 text-gray-100 hover:text-gray-900">Logout
                </NavLink>
                :
                <NavLink style={({ isActive }) => isActive ? {textDecoration: 'underline'} : undefined} to='/login' className="mr-5 text-gray-100 hover:text-gray-900">Log In
                </NavLink>
                }
                <NavLink style={({ isActive }) => isActive ? {textDecoration: 'underline'} : undefined} to="/signup" className="mr-5 text-gray-100 hover:text-gray-900">Sign Up
                </NavLink>
            </div>
        </header>
    );
};

export default Header;