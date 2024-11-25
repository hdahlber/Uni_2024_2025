import React from 'react';
import { Link } from 'react-router-dom';
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  return (
    <nav className="bg-primary shadow-md">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
       

        <div className="flex items-center">
          <Link to="/" className="text-white text-lg font-bold">
            MyLogo
          </Link>
        </div>

        <div className="flex-grow mx-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 border border-secondary rounded focus:outline-none focus:ring-2 focus:ring-quaternary"
          />
        </div>

        <div className="flex space-x-4">
          <Link
            to="/signup"
            className="bg-secondary text-white px-3 py-1 rounded hover:bg-tertiary transition"
          >
            Sign Up
          </Link>
          <Link
            to="/login"
            className="bg-secondary text-white px-3 py-1 rounded hover:bg-tertiary transition"
          >
            Log In
          </Link>
        </div>
        <NavBarIcon icon={<CiShoppingCart size="28"/>}></NavBarIcon>

        
        
      </div>
    </nav>
  );
};

const NavBarIcon = ({icon}) =>(
  <div className="navbar-icon">
  {icon}
  </div>
);
export default Navbar;