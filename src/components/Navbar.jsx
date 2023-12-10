import React, { useState } from 'react';
import {
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import Logo from '../assets//img/btl.webp';
import { Link } from 'react-scroll';


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className=' w-full h-[90px] flex justify-between items-center px-5   bg-[#181818] text-[#edf2f4] border-b-4 border-[#4b4f58] p-4'>
      <div className='sm:w-40'>
        <a href='https://tarikbijedic.netlify.app/'><img src={Logo} alt='Logo' className='object-contain w-16 pt-2 mb-2 transition duration-500 ease-in-out hover:scale-105'/>
        </a></div>

      {/* menu */}
      <ul className='hidden md:flex text-2xl font-semibold'>
        <li className='hover:text-sky-400 active:text-to-blue-800 transition duration-500 ease-in-out hover:scale-110 px-4'>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>

        <li className=' hover:text-sky-400 active:text-to-blue-800 transition duration-500 ease-in-out hover:scale-110 px-4 '>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='hover:text-sky-400 active:text-to-blue-800 transition duration-500 ease-in-out hover:scale-110 px-4'>
          <Link to='portfolio' smooth={true} duration={500}>
            Portfolio
          </Link>
        </li>
        <li className='hover:text-sky-400 active:text-to-blue-800 transition duration-500 ease-in-out hover:scale-110 px-4'>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10 text-3xl font-semibold hover:text-sky-400  cursor-pointer active:text-to-blue-800 transition duration-500 ease-in-out hover:scale-110'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0A1828] flex flex-col justify-center items-center'
        }
      >
        <li className='py-6 text-4xl hover:text-sky-400 active:text-to-blue-800 transition duration-500 ease-in-out hover:scale-110'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl hover:text-sky-400 active:text-to-blue-800 transition duration-500 ease-in-out hover:scale-110'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl hover:text-sky-400 active:text-to-blue-800 transition duration-500 ease-in-out hover:scale-110'>
          {' '}
          <Link onClick={handleClick} to='portfolio' smooth={true} duration={500}>
            Portfolio
          </Link>
        </li>
        <li className='py-6 text-4xl hover:text-sky-400 active:text-to-blue-800 transition duration-500 ease-in-out hover:scale-110'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

    </div>
  );
};

export default Navbar;