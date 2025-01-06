import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoPulseSharp } from 'react-icons/io5';
import { FaBarsStaggered } from 'react-icons/fa6';
import { AiOutlineClose } from 'react-icons/ai';
import logo from '../assets/img/pabvlogo.png'

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); 

  const toggleNavHandler = () => {
    setIsNavOpen(!isNavOpen); 
  };

  const closeNavHandler = () => {
    setIsNavOpen(false); 
  };

  return (
    <nav className="text-sky-500 font-bold w-screen h-14 grid place-items-center fixed top-0 left-0 z-20 border-b-4 backdrop-blur-sm ">
      <div className="container mx-auto flex justify-between items-start pt-4 h-full px-4">
        <button onClick={closeNavHandler} className='w-12 '>
            <Link to="/" >
                <img src={logo} alt="logo" />
            </Link>
        </button>
        <button
          className="text-xl md:hidden"
          onClick={toggleNavHandler}
        >
          {isNavOpen ? <AiOutlineClose /> : <FaBarsStaggered />}
        </button>
        <ul
          className={`${
            isNavOpen ? 'flex' : 'hidden'
          } flex-col md:flex md:flex-row items-center text-xs gap-6 absolute md:static top-20 left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none z-20`}
        >
          <li><Link to="/" onClick={closeNavHandler}>HOME</Link></li>
          <li><Link to="/products" onClick={closeNavHandler}>PRODUCTS</Link></li>
          <li><Link to="/services" onClick={closeNavHandler}>SERVICES</Link></li>
          <li><Link to="/about" onClick={closeNavHandler}>ABOUT</Link></li>
          <li><Link to="/contact" onClick={closeNavHandler}>CONTACT</Link></li>
        </ul>
        <button className="bg-orange-500 text-orange-50 px-2 py-1 text-xs font-bold rounded-md hover:bg-yellow-800 transition hidden md:block">
          <Link to="/register" onClick={closeNavHandler}>MORE</Link>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
