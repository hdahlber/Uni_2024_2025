import React, { useState } from "react";
import { CiUser, CiDatabase, CiShoppingCart } from "react-icons/ci";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);

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
          {/* Sign Up */}
          <NavBarIcon to="/filluser" icon={<CiDatabase size="28" />} />
          {/* Log In */}
          <NavBarIcon icon={<CiUser size="28" />} onClick={toggleModal} />
          {/* Shopping Cart */}
          <NavBarIcon to="/cart" icon={<CiShoppingCart size="28" />} />
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-96 shadow-lg relative">
            {/* Close Button Inside the Modal */}
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-black"
              onClick={toggleModal}
            >
              ✕
            </button>
      
            {/* Modal Content */}
            <h2 className="text-lg font-bold mb-4">Log In</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Username</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Password</label>
                <input
                  type="password"
                  className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="flex justify-between items-center">
                <Link to="/signup" className="text-primary hover:underline">
                  Don't have an account? Sign Up
                </Link>
                <Link
                  to="/login"
                  className="bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition text-center"
                >
                  Log In
                </Link>
              </div>
            </form>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavBarIcon = ({ to, icon, onClick }) => (
  <div
    className="navbar-icon cursor-pointer"
    onClick={onClick || undefined}
  >
    {to ? <Link to={to}>{icon}</Link> : icon}
  </div>
);

export default Navbar;