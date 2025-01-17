import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoPulseSharp } from 'react-icons/io5';
import { FaBarsStaggered } from 'react-icons/fa6';
import { AiOutlineClose, AiOutlineUser } from 'react-icons/ai';
import logo from '../assets/img/pabvlogo.png';
import { useAuth } from '../AuthContext';

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false); 
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleNavHandler = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNavHandler = () => {
    setIsNavOpen(false);
  };

  const toggleDropdownHandler = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const logoutHandler = () => {
    setIsAuthenticated(false);
    setIsDropdownOpen(false);
  };

  return (
    <nav className="text-sky-500 font-bold w-screen h-14 grid place-items-center fixed top-0 left-0 z-20 border-b-4 backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center pt-4 h-full px-4">
        <button onClick={closeNavHandler} className="w-12">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </button>
        <button className="text-xl md:hidden" onClick={toggleNavHandler}>
          {isNavOpen ? <AiOutlineClose /> : <FaBarsStaggered />}
        </button>
        <ul
          className={`${
            isNavOpen ? 'flex' : 'hidden'
          } flex-col md:flex md:flex-row items-center text-xs gap-6 absolute md:static top-20 left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none z-20`}
        >
          <li>
            <Link to="/" onClick={closeNavHandler}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/products" onClick={closeNavHandler}>
              PRODUCTS
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={closeNavHandler}>
              SERVICES
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={closeNavHandler}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeNavHandler}>
              CONTACT
            </Link>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          {!isAuthenticated ? (
            <button className="bg-orange-500 text-orange-50 px-2 py-1 text-xs font-bold rounded-md hover:bg-yellow-800 transition hidden md:block">
              <Link to="/register" onClick={closeNavHandler}>
                MORE
              </Link>
            </button>
          ) : (
            <div className="relative">
              <button
                className="text-xl flex items-center gap-2"
                onClick={toggleDropdownHandler}
              >
                <AiOutlineUser />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md p-2">
                  <ul className="flex flex-col gap-2 text-gray-700">
                    <li>
                      <Link
                        to="/profile"
                        onClick={() => setIsDropdownOpen(false)}
                        className="hover:text-sky-500"
                      >
                        Profile
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/cart"
                        onClick={() => setIsDropdownOpen(false)}
                        className="hover:text-sky-500"
                      >
                        Cart
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/purchases"
                        onClick={() => setIsDropdownOpen(false)}
                        className="hover:text-sky-500"
                      >
                        Purchases
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/dashboard"
                        onClick={() => setIsDropdownOpen(false)}
                        className="hover:text-sky-500"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={logoutHandler}
                        className="text-left w-full hover:text-red-500"
                      >
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
